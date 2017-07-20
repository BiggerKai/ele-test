import axios from 'axios';

var instance = axios.create({
  baseUrl: 'http://www.flc.com/',
  timeout: 5000
});

export default instance;