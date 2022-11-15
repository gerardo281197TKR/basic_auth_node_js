'use strict';
const moment = require('moment');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'toker99100';
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
var now = moment().format('YYYY-MM-DD h:mm:ss');
//compare password
//bcrypt.compareSync(myPlaintextPassword, hash);
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      role_id: 1,
      firstname: 'Gerardo',
      lastname: 'Luevanos',
      fullname: 'Gerardo Luevanos',
      email: 'gerardo.luevanos01@gmail.com',
      password: hash,
      picture_profile: null,
      picture_business: null,
      business: 'Control escolar',
      created_at: now,
      updated_at: now
    }], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};