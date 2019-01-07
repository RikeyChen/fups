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

export const likeFup = (fup_id) => {
  return axios.post(`/api/fups/${fup_id}/likes`)
}

export const unlikeFup = (fup_id, like_id) => {
  return axios.delete(`/api/fups/${fup_id}/likes/${like_id}`)
}

export const getFupActivity = (id) => {
  return axios.get(`/api/fups/data/week/${id}`)
}