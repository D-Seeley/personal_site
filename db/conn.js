const Sequelize = require('sequelize');
const conn = new Sequelize(
    process.env.DATABASE_URL, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PW,
    {
        dialect: 'postgres'
    }
);

module.exports = conn;
