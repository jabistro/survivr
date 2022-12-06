"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
// END of new code

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.albums = "Albums";
    return queryInterface.bulkInsert(
      options,
      [
        {
          userId: 1,
          title: "Women of Survivor",
          description:
            "So many strong women have changed the game of survivor & should be remembered for their awesomeness.",
        },
        {
          userId: 2,
          title: "Jaw Droppers",
          description: "All of my favorite moments that had me speechless.",
        },
        {
          userId: 3,
          title: "Challenge Beasts",
          description: "The players who won the most individual challenges.",
        },
        {
          userId: 4,
          title: "Boston Rob Appreciation",
          description:
            "Boston Rob is viewed as one of the best players to ever play the game of Survivor.",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.albums = "Albums";
    return queryInterface.bulkDelete(options, null, {});
  },
};
