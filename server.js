const express = require("express");
const userRoutes = require("./router/userRoutes");


const app = express();

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
