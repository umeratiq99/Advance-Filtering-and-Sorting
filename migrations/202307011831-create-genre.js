"use strict";

// Migration Schema 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("genres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
        unique : true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
  });},
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("genres");
  },
};