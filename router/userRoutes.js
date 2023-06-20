const express = require("express");
const router = express.Router();
const Users = require("../models/userTable");
const { Op } = require("sequelize");
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


//testing
router.get(
  "/",
  [
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
        console.log(value);
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
        console.log(value);
        if (value !== "fname" && value !== "createdAt") {
          throw new Error(
            "Incorrect Value for orderby: firstname for User's first name and createddate for Ordering by date"
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
  ],
  validateResult,
  async (req, res) => {
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
      if(req.query.fname || req.query.lname || req.query.desc){
        let arr=[];
      if(req.query.fname){
        arr.push({fname: {[Op.like]: `%${req.query.fname}%`}});
      }
      if(req.query.lname){
        arr.push({lname: {[Op.like]: `%${req.query.lname}%`}});
      }
      if(req.query.description){
        arr.push({description: {[Op.like]: `%${req.query.description}%`}});
      }
      options.where={[Op.or]:arr};
    }
      console.log(options.where); 
      const users = await Users.findAndCountAll(options);
      const pages = parseInt(users.count);
      res.send({
        content: users.rows,
        Count: pages,
      });
    } catch (err) {
      res.send(err.message);
    }
  }
);

// // if(error.message==="skip")
// {skip = defValueSkip;}
// // if(error.message==="take")
//  {take = defValueTake;}

// router.get('/getUserByName', async(req, res)=>{
//   const users = await Users.findOne({where: {fname: req.query.name}});
//   res.send({
//     users: users
//   });
// })

//Orignial
// router.get("/", [query('skip').optional().isInt({min:0}), query('take').optional().isInt({min:0})], async (req, res) => {
//   try {
//   let skip = Number.parseInt(req.query.skip);
//   let take = Number.parseInt(req.query.take);
//   const defValueSkip = 0;
//   const defValueTake = 10;
//   if(!query('skip').notEmpty()){
//     skip = defValueSkip;
//   }
//   if(!query('take').notEmpty()){
//     take = defValueTake;
//   }

//   let order = req.query.order;
//   const n="AB"
//     const users = await Users.findAndCountAll({
//       limit: take,
//       offset: skip,
//       where :{
//         [Op.or]:[
//           {fname: {[Op.like]: `%${n}%`}},
//           //{lname: "AABA"},
//           //{description: "ZZZW"}
//         ]
//       },
//       order: [
//         ["fname", order], //ASC of aces and DESC for descending
//       ],
//     });
//     const pages = parseInt(users.count);
//     res.send({
//       content: users.rows,
//       Count: pages,
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// });
router.delete("/", async (req, res) => {
  try {
    const deleted = await Users.destroy({
      where: {},
    });
    res.json("All Data Deleted");
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = router;
