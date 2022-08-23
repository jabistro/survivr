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
        description: "All of my favorite moments that had me speechless"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
