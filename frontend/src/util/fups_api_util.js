import axios from 'axios';

export const getFups = (page) => {
  return axios.get(`/api/fups?page=${page}`)
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