import axios from 'axios';

export const getFups = () => {
  return axios.get('/api/fups')
}

export const getUserFups = (id) => {
  return axios.get(`/api/fups/user/${id}`)
}

export const writeFup = data => {
  return axios.post('/api/fups', data)
}

export const getDataFups = (id) => {
  return axios.get(`/api/fups/data/${id}`)
}