import axios from '../utils/axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers } from './data/user';

export default {
  bootstrap() {
    let mock = new MockAdapter(axios);

    mock.
      onGet('/success').reply(200, {
        msg: 'success'
      })
      .onGet('/error').reply(500, {
        msg: 'error'
      })
      .onPost('/login').reply(config => {
        let { userName, password } = JSON.parse(config.data);
        return new Promise((resolve, reject) => {
          let user = null;
          setTimeout(() => {
            let hasUser = LoginUsers.some(u => {
              if (u.userName == userName && u.password == password) {
                user = JSON.parse(JSON.stringify(u));
                user.password = undefined;
                return true;
              }
            });

            if (hasUser) {
              resolve([200, { code: 200, msg: '请求成功', user }]);
            } else {
              resolve([200, { code: 500, msg: '账号或密码错误' }]);
            }
          }, 1000);
        })
      })
  }
}