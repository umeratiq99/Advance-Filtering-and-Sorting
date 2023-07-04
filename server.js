const express = require("express");
const userRoutes = require("./router/blogRoutes");
// const sequelize = require("./config/dbconfig")

const app = express();

app.use("/blogs", userRoutes);

const server=app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
server.on('error', (error) => {
  console.error('Server error:', error);
})