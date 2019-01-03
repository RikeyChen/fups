import axios from 'axios';

export const getFups = () => {
  return axios.get('/api/fups')
}

export const getUserFups = () => {
  return axios.get(`/api/fups/user/${id}`)
}

export const writeFup = data => {
  return axios.post('/api/fups', data)
}