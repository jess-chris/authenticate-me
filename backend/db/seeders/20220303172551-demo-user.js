'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'Joebob@yahoo.io',
        username: 'Joebobby',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'scoobydoo@mys.co',
        username: 'Scooby',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'anon@who.io',
        username: 'internetperson',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'potato@spud.co',
        username: 'Fry',
        hashedPassword: bcrypt.hashSync('password')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
