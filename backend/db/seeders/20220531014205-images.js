'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        albumId: 1,
        imageURL: 'https://static.onecms.io/wp-content/uploads/sites/6/2019/05/96610_d18737-2000.jpg',
        caption: 'All of the black widows laughing after having convinced Eric to give up individual immunity to Natalie and then seeing him voted out shortly thereafter',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
