'use strict';
const { hash } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.beforeCreate((user, options) => {
    user.password =  hash(user.password)
  });
  
  return User;
};