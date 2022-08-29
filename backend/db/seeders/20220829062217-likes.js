'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Likes', [{
      userId: 2,
      imageId: 1
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
