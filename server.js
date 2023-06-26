const express = require("express");
const userRoutes = require("./router/userRoutes");

const app = express();

app.use("/users", userRoutes);

const server=app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
server.on('error', (error) => {
  console.error('Server error:', error);
})