const Users = require("../models/userTable");
const userServices = require("../services/userServices");

// Methods to be executed on routes

// this function builds up an object to find relevent data
const getData = async (req, res) => {
  try {
    const data = await userServices(req.query);
    console.log(data);
    res.send(data);
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
