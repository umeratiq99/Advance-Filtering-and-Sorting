const { query, validationResult } = require("express-validator");


const validations = [
  query("skip")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("skip cannot be empty")
    .isInt({ min: 0 })
    .withMessage("Skip should be an Integer"),
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
    .custom((value) => {
      if (value !== "ASC" && value !== "DESC") {
        throw new Error(
          "Incorrect Value for order: ASC for ascending and DESC for Descending"
        );
      }
      return true;
    }),
  query("orderby")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("orderby cannot be empty")
    .isString()
    .withMessage("orderby should be string")
    .custom((value) => {
      if (value !== "fname" && value !== "createdAt") {
        throw new Error(
          "Incorrect Value for orderby: fname for User's first name and creatAt for Ordering by date"
        );
      }
      return true;
    }),
  query("fname")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("fname cannot be empty")
    .isString()
    .withMessage("fname should be a String"),
  query("lname")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("lname cannot be empty")
    .isString()
    .withMessage("lname should be a String"),
  query("description")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("description cannot be empty")
    .isString()
    .withMessage("description should be a String"),
];

const validateResult = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const messages = error.errors.map((e) => e.msg);
    res.send(messages);
  } else {
    next();
  }
};

module.exports={ validations , validateResult }