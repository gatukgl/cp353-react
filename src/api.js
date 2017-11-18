import axios from 'axios'
import { error } from 'util';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Content-Type': 'application/json' }
})

export const login = (username, password) => {
  const data = { 
    username: username,
    password: password
  }

  return axiosInstance.post('login', data)
    .then(data => data)
    .catch(error => error.response)
}
