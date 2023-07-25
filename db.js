const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

let hostEnv = process.env.host;
let userEnv = process.env.user;
let passwordEnv = process.env.password;
let dataEnv = process.env.database;
const connection = mysql.createConnection({
  host: `${hostEnv}`,
  user: `${userEnv}`,
  password: `${passwordEnv}`,
  database: `${dataEnv}`
});

module.exports = connection;
