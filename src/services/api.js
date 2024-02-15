import axios from 'axios';

const api = axios.create({
  baseURL: 'https://luvilla-back-21262c6c12d8.herokuapp.com/',
  // baseURL: 'http://localhost:5555/',
});

export default api;
