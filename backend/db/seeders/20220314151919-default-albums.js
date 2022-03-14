'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Albums', [
        {userId: 1, title: 'My album', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, title: 'Cool pictures', createdAt: new Date(), updatedAt: new Date()},
        {userId: 3, title: 'My photos', createdAt: new Date(), updatedAt: new Date()},
        {userId: 4, title: 'new album', createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, title: 'stuff', createdAt: new Date(), updatedAt: new Date()},
        {userId: 5, title: 'content', createdAt: new Date(), updatedAt: new Date()},
        {userId: 6, title: 'My art', createdAt: new Date(), updatedAt: new Date()},
        {userId: 7, title: 'Adventures', createdAt: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Albums', {});

  }
};
