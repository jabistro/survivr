'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        albumId: 1,
        imageUsername: 'Demo-lition',
        imageURL: 'https://static.onecms.io/wp-content/uploads/sites/6/2019/05/96610_d18737-2000.jpg',
        caption: 'All of the black widows laughing after having convinced Eric to give up individual immunity to Natalie and then seeing him voted out shortly thereafter'
      },
      {
        userId: 2,
        albumId: 2,
        imageUsername: 'FakeUser1',
        imageURL: 'https://cdn.vox-cdn.com/thumbor/QICqwHy6sXsar4z4Lk-CGFDWonc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19957599/JESSICA_ROCKS.jpg',
        caption: 'Poor Jessica. She put her game on the line and was brave enough to go to rocks, but the Survivor Gods were not on her side'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
