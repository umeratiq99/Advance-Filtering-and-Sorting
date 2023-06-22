// // Database Configuration
 const sequelize = require('sequelize');
 const dotenv=require("dotenv");
 dotenv.config();

const Sequelize = new sequelize(
    process.env.DATABASE,
    process.env.USER_NAME,
    process.env.PASSWORD,
    {
      host: process.env.HOST,
      dialect: process.env.DIALECT,
    }
  );
  // Test database connection
  Sequelize
    .authenticate()
    .then(() => {
      console.log("Database connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

module.exports = Sequelize;
