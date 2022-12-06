"use strict";

// NEW: add this code to each create table migration file
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
// END of new code

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Comments",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          hooks: "true",
          references: {
            model: "Users",
            key: "id",
          },
        },
        imageId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          hooks: "true",
          references: {
            model: "Images",
            key: "id",
          },
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        createdAt: {
          defaultValue: Sequelize.fn("now"),
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          defaultValue: Sequelize.fn("now"),
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      options
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Comments", options);
  },
};
