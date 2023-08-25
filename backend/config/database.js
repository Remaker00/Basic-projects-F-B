const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('project-1', 'root', 'Nish@nt9', {
    dialect: 'mysql',
    storage: 'localstorage'
});

module.exports = sequelize;