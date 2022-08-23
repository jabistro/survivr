'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Likes', [{
      userId: 1,
      imageId: 1
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
