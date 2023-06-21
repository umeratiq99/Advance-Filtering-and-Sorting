const express = require('express');
const Routes = require('./router/userRoutes');
const config = require("./config/config.json")["development"];
const Sequelize = require('sequelize');
// // Configure database connection
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);
// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

  const app = express();

app.use('/users', Routes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
