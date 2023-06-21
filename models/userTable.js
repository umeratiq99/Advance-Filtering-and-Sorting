const sq=require('../config/dbconfig');
const {DataTypes}=require('sequelize');

//Creating Table in DB
const Users = sq.define("users", {    //first arguement todo is the table name
    id: {                        // todo_id here is the name of column
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
    description: {
      type: DataTypes.STRING,
    },
  });


  module.exports=Users;