import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const DishForm = ({ dish, handleSubmit, handleChange }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3> The BEST Restaurants in your City</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId=" title">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            placeholder='Name'
            // This name should line up with the state we want to change
            name='name'
            value={dish.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            placeholder='Price of dish'
            type = "price"
            // This name should line up with the state we want to change
            name='media'
            value={dish.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            placeholder='Dish Description'
            // This name should line up with the state we want to change
            name='description'
            value={dish.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type='submit'varient='primary'>Submit</Button>
      </Form>
    </div>
  </div>
)

export default DishForm
