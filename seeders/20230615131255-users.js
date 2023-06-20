"use strict";
const data = require("./data.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach((user) => {
      user.createdAt = new Date();
      user.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
