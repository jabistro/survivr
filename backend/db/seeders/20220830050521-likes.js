"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
// END of new code

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.likes = "Likes";
    return queryInterface.bulkInsert(
      options,
      [
        {
          userId: 2,
          imageId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.likes = "Likes";
    return queryInterface.bulkDelete(options, null, {});
  },
};
