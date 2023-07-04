const sequelize = require("../config/dbconfig");
const { DataTypes } = require("sequelize");

//Creating genre Table
const Genres = sequelize.define("genres", {
  id: {
    // id here is the name of column
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Genres;
