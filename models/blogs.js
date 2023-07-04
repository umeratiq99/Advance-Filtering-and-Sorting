// Table Schema in DB
const sequelize = require("../config/dbconfig");
const DataTypes = require("sequelize");
const Users = require("./userTable");
const Genres = require("./genres");

//Creating Table in DB
const Blogs = sequelize.define("blogs", {
  id: {
    // id here is the name of column
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  desription: {
    type: DataTypes.TEXT,
  },
});
Genres.hasMany(Blogs, { foreignKey: "genreid" });
Blogs.belongsTo(Genres, { foreignKey: "genreid" });

Users.hasMany(Blogs,{foreignKey : 'userid'});
Blogs.belongsTo(Users,{foreignKey : 'userid'});
module.exports = Blogs;
