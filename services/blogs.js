const Blogs = require("../models/blogs");
const Genre = require("../models/genres");
const User =require("../models/userTable")
const { Op } = require("sequelize");
const getBlogs = async (query) => {
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
      options.order = [["title", query.order]];
    }
    if (query.find) {
        options.include = [
            {
                model: User,
                attributes: ['fname','lname']
            },
            {
                model: Genre,
                attributes: ['category']
            }
        ]
        options.where= {
            [Op.or]: [
                { title : { [Op.iLike]: `%${query.find}%` } },
                { desription : { [Op.iLike]: `%${query.find}%` } },
                { '$user.fname$': { [Op.iLike]: `%${query.find}%` }},
                { '$user.lname$': { [Op.iLike]: `%${query.find}%` }},
                { '$genre.category$': { [Op.iLike]: `%${query.find}%` }},
            ]
        }
        
    }
    const blog = await Blogs.findAndCountAll(options);
    const count = parseInt(blog.count);
    return {
      content: blog.rows,
      Count: count,
    };
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
};

module.exports = getBlogs;