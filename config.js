require("dotenv").config();
var config = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERN,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
};
module.exports = config;
