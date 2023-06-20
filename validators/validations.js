const { query, validationResult } = require("express-validator");



const validateResult = (req, res, next) => {
    const error = validationResult(req);
    // console.log(error);
    if (!error.isEmpty()) {
      const messages = error.errors.map((e) => e.msg);
      res.send(messages);
    } else {
      next();
    }
  };