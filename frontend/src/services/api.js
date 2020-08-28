import axios from 'axios';

api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;