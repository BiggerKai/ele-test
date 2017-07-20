import axios from '../utils/axios'

export default {
  requestLogin: (params) => {
    return axios.post('/login', params).then(res => res.data);
  }
}