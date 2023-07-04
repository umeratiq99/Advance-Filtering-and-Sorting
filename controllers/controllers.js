const Users = require("../models/userTable");
const blogs=require("../services/blogs")
// Methods to be executed on routes
let data;
// this function builds up an object to find relevent data
const getData = async (req, res) => {
  try {
    if(req.query.find){
       data=await blogs(req.query);
    }

    // console.log(data);
    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
};


// Exporting all Methods as Object
module.exports =  getData;
