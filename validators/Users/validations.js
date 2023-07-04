const { query, validationResult } = require("express-validator");

// Query validatons
const validations = [
    query("find")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("find cannot be empty")
    .isString()
    .withMessage("find should be string"),
  query("skip")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("skip cannot be empty")
    .isInt({ min: 0, max: 250000 })
    .withMessage("Skip should be an Integer, Skip should be less than 250k"),
  query("take")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("take cannot be empty")
    .isInt({ min: 0 })
    .withMessage("Take should be an Integer"),
  query("order")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("order cannot be empty")
    .isString()
    .withMessage("order should be string")
    .toUpperCase()
    .custom((value) => {
      if (value !== "ASC" && value !== "DESC") {
        throw new Error(
          "Incorrect Value for order: ASC for ascending and DESC for Descending"
        );
      }
      return true;
    }),
];

//Validating Results
const validateResult = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const messages = error.errors.map((e) => e.msg);
    res.send(messages);
  } else {
    next();
  }
};

module.exports = { validations, validateResult };
