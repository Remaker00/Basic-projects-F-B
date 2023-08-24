const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('project-2', 'root', 'Nish@nt9', {
    dialect: 'mysql',
    storage: 'localstorage'
});

const User = sequelize.define('User', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.DOUBLE
});

module.exports = {
    sequelize,
    User
};