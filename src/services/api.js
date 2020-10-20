import axios from 'axios';

const api = axios.create({
  baseURL: 'https://edutec-cosmologia-backend.herokuapp.com/',
});

export default api;
