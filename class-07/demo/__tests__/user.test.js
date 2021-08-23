'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = require('../usersSchema.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres@localhost:5432/bearerauth');
const Users = UserSchema(sequelize, DataTypes);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('User schema', () => {

  let userInfo = {
    username: 'User',
    password: 'test',
  }

  test('Should create a user with a hashed password', async () => {
    let user = await Users.create(userInfo);
    expect(user.id).toBeTruthy();
    expect(user.username).toBeTruthy();
    expect(user.password).toBeTruthy();
    expect(user.password).not.toEqual('test');

    let match = await bcrypt.compare('test', user.password);
    expect(match).toBeTruthy();
  });

  test('Should attach a token on find', async () => {

    let user = await Users.findOne({ where: { username: userInfo.username } });
    console.log(user);
    expect(user.username).toEqual(userInfo.username);
    expect(user.token).toBeTruthy();
    expect(jwt.decode(user.token).username).toEqual(userInfo.username);

    let users = await Users.findAll({ where: { username: userInfo.username } });
    expect(users[0].username).toEqual(userInfo.username);
    expect(users[0].token).toBeTruthy();
  });
});
