const Users = require("../models/userTable");
const { Op } = require("sequelize");

// Methods to be executed on routes


// this function builds up an object to find relevent data
const getData = async (req, res) => {
  try {
    let options = {};

    if (req.query.skip && !req.query.take) {
      throw new Error("Cannot offset Data");
    }

    if (req.query.take) {
      options.limit = req.query.take;
    }
    if (req.query.skip) {
      options.offset = req.query.skip;
    }
    if (req.query.order) {
      {
        options.order = [[req.query.orderby || "fname", req.query.order]];
      }
    }
    if (req.query.fname || req.query.lname || req.query.desc) {
      let arr = [];
      if (req.query.fname) {
        arr.push({ fname: { [Op.iLike]: `%${req.query.fname}%` } });
      }
      if (req.query.lname) {
        arr.push({ lname: { [Op.iLike]: `%${req.query.lname}%` } });
      }
      if (req.query.description) {
        arr.push({ description: { [Op.iLike]: `%${req.query.description}%` } });
      }
      options.where = { [Op.or]: arr };
    }
    const users = await Users.findAndCountAll(options);
    const count = parseInt(users.count);
    res.send({
      content: users.rows,
      Count: count,
    });
  } catch (err) {
    res.send(err.message);
  }
};

//Method to Delete all data in DB
const deleteAll = async (req, res) => {
  try {
    const deleted = await Users.destroy({
      where: {},
    });
    res.json("All Data Deleted");
  } catch (err) {
    console.error(err.message);
  }
};

// Exporting all Methods as Object
module.exports = { getData, deleteAll };
