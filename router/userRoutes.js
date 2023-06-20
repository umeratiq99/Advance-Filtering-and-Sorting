const express = require("express");
const router = express.Router();
const { query, validationResult } = require("express-validator");
const { getData, deleteAll } = require("../controllers/controllers");
const { validations , validateResult }=require("../validators/Users/validations");

//Single API for Sorting Searching And Pagination
router.get("/", validations, validateResult, getData);

//Delete All data in DB
router.delete("/", deleteAll);

module.exports = router;
