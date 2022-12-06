"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
// END of new code

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.comments = "Comments";
    return queryInterface.bulkInsert(
      options,
      [
        {
          userId: 2,
          imageId: 1,
          content: "Poor Eric. How does anyone fall for that? smh",
        },
        {
          userId: 1,
          imageId: 2,
          content:
            "Sometimes you just have to put your game on the line and draw rocks. I respect it.",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.comments = "Comments";
    return queryInterface.bulkDelete(options, null, {});
  },
};
