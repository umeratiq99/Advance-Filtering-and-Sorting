const express = require("express");
//Controllers
const { getData, deleteAll } = require("../controllers/controllers");
//Local Modules for validations
const { validations , validateResult }=require("../validators/Users/validations");

// Initialization
const router = express.Router();

//Requests

//Single API for Sorting Searching And Pagination takes in different query params and return relevent data
router.get("/", validations, validateResult, getData);

//Delete All data in DB
router.delete("/", deleteAll);

module.exports = router;
