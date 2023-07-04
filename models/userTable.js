// Table Schema in DB
const sq = require("../config/dbconfig");
const { DataTypes } = require("sequelize");
const Genres =require('./genres')


//Creating Table in DB
const Users = sq.define("users", {
  //first arguement users is the table name in DB
  id: {
    // id here is the name of column
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: {
    type: DataTypes.STRING,
  },
  lname: {
    type: DataTypes.STRING,
  },
});


module.exports = Users;
