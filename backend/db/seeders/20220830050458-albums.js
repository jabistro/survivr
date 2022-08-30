'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: "Women of Survivor",
        description: "So many strong women have changed the game of survivor & should be remembered for their awesomeness."
      },
      {
        userId: 2,
        title: "Jaw Droppers",
        description: "All of my favorite moments that had me speechless."
      },
      {
        userId: 3,
        title: "Challenge Beasts",
        description: "The players who won the most individual challenges."
      },
      {
        userId: 4,
        title: "Boston Rob Appreciation",
        description: "Boston Rob is viewed as one of the best players to ever play the game of Survivor."
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
