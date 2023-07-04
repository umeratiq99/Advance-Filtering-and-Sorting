const express = require("express");
//Controllers
const  getData = require("../controllers/controllers");
//Local Modules for validations
const { validations , validateResult }=require("../validators/Users/validations");

// Initialization
const router = express.Router();

//Requests

//Single API for Sorting Searching And Pagination takes in different query params and return relevent data
router.get("/", validations, validateResult, getData);

module.exports = router;
