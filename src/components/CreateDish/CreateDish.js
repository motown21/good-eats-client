import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import OrderForm from '../OrderForm/OrderForm'
import { createDish } from '../../api/dish'

class CreateDish extends Component {
  constructor (props) {
    super(props)
    // this state
    this.state = {
      dish: {
        name: '',
        price: '',
        desciption: '',
        upload: ''
      },

      createdId: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { dish } = this.state

    createDish(dish, user)
      .then(res => {
        this.setState({ createdId: res.data.dish._id })

        return res
      })
      .then(res => msgAlert({
        heading: 'Created Dish Successfully',
        message: `Dish has been created successfully. Now viewing ${res.data.dish.name}.`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create Dish',
          message: 'Could not create dish with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    event.persist()

    this.setState(state => {
      return {

        dish: { ...state.dish, [event.target.name]: event.target.value }
      }
    })
  }

  render () {
    const { dish, createdId } = this.state

    if (createdId) {
      // create dishs
      return <Redirect to= '/dishes' />
    }

    return (
      <div>

        <OrderForm
          dish={dish}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default CreateDish
