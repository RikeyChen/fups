import axios from 'axios';

export const getFups = (page) => {
  return axios.get(`/api/fups?page=${page}`)
}

export const getUserFups = (id, page) => {
  return axios.get(`/api/fups/user/${id}?page=${page}`);
}

export const writeFup = data => {
  return axios.post('/api/fups', data)
}

export const getDataFups = (id) => {
  return axios.get(`/api/fups/data/${id}`)
}

export const likeFup = (id, data) => {
  return axios.post(`/api/fups/${id}/likes`, data)
}

export const weeklyFupActivity = (id) => {
  return axios.get(`/api/fups/data/week/${id}`)
}