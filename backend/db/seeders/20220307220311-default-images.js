'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {userId: 1, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2020/06/01/22/23/eyes-5248678_960_720.jpg', content: 'Some picture', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg', content: '', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg', content: null, createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2019/03/18/04/53/bird-4062359_960_720.jpg', content: 'Some 111 picture', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg', content: 'Cool pic', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_960_720.jpg', content: 'random pic', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2021/07/19/04/35/workers-6477163_960_720.jpg', content: 'Some fdgdf picture', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', {});
  }
};
