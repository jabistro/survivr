'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'survivorfan87',
        pfpURL: 'https://play-lh.googleusercontent.com/_utF99hukdO5VgAdiYektjfB4nGaYTxAQGyIgfSM8fThitO2rECL927dZjwrO9LK8kNcnfcinHK4ZqtESz0R',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user.io',
        username: 'jeffs#1fan',
        pfpURL: 'https://parade.com/.image/t_share/MTkwNTgxMzIyMjkyNDcxNjc2/survivor-43-jeff-probst.jpg',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user3@user.io',
        username: 'soulsurvivor',
        pfpURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPacAA0PL4A4xSzTBVinaRbMMS5kZJjtpndw&usqp=CAU',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user4@user.io',
        username: 'bostonbob',
        pfpURL: 'https://parade.com/.image/t_share/MTkwNTgwOTE0NTM3ODk5MTMz/rob-mariano-survivor-40.jpg',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'user5@user.io',
        username: 'thepirate',
        pfpURL: 'https://imagez.tmz.com/image/82/4by3/2021/08/05/82c6710739434596b7df8568a3e3e4d3_xl.jpg',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: 'user6@user.io',
        username: 'TorchSnuffer82',
        pfpURL: 'https://memegenerator.net/img/images/300x300/12258382.jpg',
        hashedPassword: bcrypt.hashSync('password6')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['survivorfan87', 'jeffs#1fan', 'soulsurvivor', 'bostonbob', 'thepirate', 'TorchSnuffer82'] }
    }, {});
  }
};
