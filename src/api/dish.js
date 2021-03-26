import apiUrl from '../apiConfig'

import axios from 'axios'

export const dishIndex = user => {
  return axios({
    url: apiUrl + '/dishes',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const createDish = (dish, user) => {
  return axios({
    url: apiUrl + '/dishes',
    method: 'dish',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { dish }
  })
}

// get a single dish
export const dishShow = (id, user) => {
  return axios({
    url: apiUrl + '/dishes/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const dishDelete = (id, user) => {
  return axios({
    url: apiUrl + '/dishes/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const dishUpdate = (id, dish, user) => {
  return axios({
    url: apiUrl + '/dishes/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { dish }
  })
}
