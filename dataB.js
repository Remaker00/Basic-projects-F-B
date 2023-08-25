const Sequelize = require('sequelize');

const sequelize = new Sequelize('project-1', 'root', 'Nish@nt9' , {
    dialect: 'mysql',
    storage: 'localhost'
});

const Expense = sequelize.define('users', {
    expense: Sequelize.INTEGER,
    description: Sequelize.STRING,
    category: Sequelize.STRING
});

const login = sequelize.define('login', {
    email: Sequelize.STRING,
    password: Sequelize.DOUBLE
});

module.exports = {
    sequelize, Expense, login
};