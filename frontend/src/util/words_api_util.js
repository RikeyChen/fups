import axios from 'axios';

export const getUserWords = (id) => {
  return axios.get(`/api/words/${id}`)
}