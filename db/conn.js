const Sequelize = require('sequelize');

const db_URL = 'postgres://daniel:playmate@localhost:5432/template1';

// process.env.DATABASE_URL || 'postgres://localhost/daniel';
const db_user = process.env.DATABASE_USER;
const db_pw = process.env.DATABASE_PW;

console.log(db_URL, db_user, db_pw);

const conn = new Sequelize(db_URL,
    {
        dialect: 'postgres'
    }
);

module.exports = conn;
