"use strict";
const bcrypt = require("bcryptjs");

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
// END of new code

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.users = "Users";
    return queryInterface.bulkInsert(
      options,
      [
        {
          email: "demo@user.io",
          username: "survivorfan87",
          pfpURL: "https://flxt.tmsimg.com/assets/p20340551_b_v13_ab.jpg",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user2@user.io",
          username: "jeffs#1fan",
          pfpURL:
            "https://parade.com/.image/t_share/MTkwNTgxMzIyMjkyNDcxNjc2/survivor-43-jeff-probst.jpg",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          email: "user3@user.io",
          username: "soulsurvivor",
          pfpURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPacAA0PL4A4xSzTBVinaRbMMS5kZJjtpndw&usqp=CAU",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: "user4@user.io",
          username: "bostonbob",
          pfpURL:
            "https://parade.com/.image/t_share/MTkwNTgwOTE0NTM3ODk5MTMz/rob-mariano-survivor-40.jpg",
          hashedPassword: bcrypt.hashSync("password4"),
        },
        {
          email: "user5@user.io",
          username: "thepirate",
          pfpURL:
            "https://imagez.tmz.com/image/82/4by3/2021/08/05/82c6710739434596b7df8568a3e3e4d3_xl.jpg",
          hashedPassword: bcrypt.hashSync("password5"),
        },
        {
          email: "user6@user.io",
          username: "TorchSnuffer82",
          pfpURL: "https://memegenerator.net/img/images/300x300/12258382.jpg",
          hashedPassword: bcrypt.hashSync("password6"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.users = "Users";
    return queryInterface.bulkDelete(
      options,
      {
        username: {
          [Op.in]: [
            "survivorfan87",
            "jeffs#1fan",
            "soulsurvivor",
            "bostonbob",
            "thepirate",
            "TorchSnuffer82",
          ],
        },
      },
      {}
    );
  },
};
