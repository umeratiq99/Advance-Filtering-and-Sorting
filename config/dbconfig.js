// // Database Configuration
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);
// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    // Users.sync({ alter: true });
    // Blogs.sync({ alter: true });
    // Genres.sync({ alter: true });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
