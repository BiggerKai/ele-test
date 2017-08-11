import Mock from 'mockjs';
var user1Avator = require('../../assets/user.png')
const LoginUsers = [
  {
    id: 1,
    userName: 'admin',
    password: '123123',
    name: '管理员',
    avatar: user1Avator
  }
];

const Users = [];
for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-70': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

export { LoginUsers, Users }