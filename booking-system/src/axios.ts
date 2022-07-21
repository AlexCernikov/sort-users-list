import axios from 'axios';

axios.defaults.baseURL = 'http://135.181.104.18:8081/';
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
