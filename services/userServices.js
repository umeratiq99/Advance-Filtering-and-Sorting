const Users = require("../models/userTable");
const { Op } = require("sequelize");

const getUsers= async (query)=>{
    try {
        let options = {};
    
        if (query.skip && !query.take) {
          throw new Error("Cannot offset Data");
        }
    
        if (query.take) {
          options.limit = query.take;
        }
        if (query.skip) {
          options.offset = query.skip;
        }
        if (query.order) {
            options.order = [[query.orderby || "fname", query.order]];
        }
        if (query.fname || query.lname || query.desc) {
          let arr = [];
          if (query.fname) {
            arr.push({ fname: { [Op.iLike]: `%${query.fname}%` } });
          }
          if (query.lname) {
            arr.push({ lname: { [Op.iLike]: `%${query.lname}%` } });
          }
          if (query.description) {
            arr.push({ description: { [Op.iLike]: `%${query.description}%` } });
          }
          options.where = { [Op.or]: arr };
        }
        const users = await Users.findAndCountAll(options);
        const count = parseInt(users.count);
        return({
          content: users.rows,
          Count: count,
        });
      } catch (err) {
        throw new Error (err.message);
      }
}

module.exports=getUsers;