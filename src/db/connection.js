require("dotenv").config();

//Sequelize is a class constructor (with capital letter)
//lower case sequelize is the connection

const { Sequelize } = require("sequelize");

//exports connection as individual item so app.js needs curly brackets to ref
exports.sequelize = new Sequelize(process.env.MYSQL_URI);

