'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 1,
        content: 'Poor Eric. How does anyone fall for that? smh'
      },
      {
        userId: 2,
        imageId: 2,
        content: 'Sometimes you just have to put your game on the line and draw rocks. I respect it.'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
