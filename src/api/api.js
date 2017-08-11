import axios from '../utils/axios'

const requestLogin = params => {
  return axios.post('/login', params).then(res => res.data);
};
const getUserList = params => {
  return axios.get('/user/list', { params: params }).then(res => res.data);
};

export { requestLogin, getUserList }

