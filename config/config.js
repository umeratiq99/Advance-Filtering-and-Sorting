const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    development: {
        database: process.env.DATABASE,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  dialect: process.env.DIALECT,}
}