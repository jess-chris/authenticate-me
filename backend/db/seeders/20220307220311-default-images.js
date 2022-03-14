'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {userId: 1, albumId: 1, imageUrl: 'https://cdn.pixabay.com/photo/2020/06/01/22/23/eyes-5248678_960_720.jpg', content: 'Some picture', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: 5, imageUrl: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg', content: '', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, albumId: 3, imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg', content: null, createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, albumId: 2, imageUrl: 'https://cdn.pixabay.com/photo/2019/03/18/04/53/bird-4062359_960_720.jpg', content: 'Some 111', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: 5, imageUrl: 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg', content: 'Cool pic', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: 5, imageUrl: 'https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_960_720.jpg', content: 'random pic', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, albumId: 3, imageUrl: 'https://cdn.pixabay.com/photo/2021/07/19/04/35/workers-6477163_960_720.jpg', content: 'picture', createdAt: new Date(), updatedAt: new Date()},
      {userId: 5, albumId: 6, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122_960_720.jpg', content: 'not water', createdAt: new Date(), updatedAt: new Date()},
      {userId: 6, albumId: 7, imageUrl: 'https://cdn.pixabay.com/photo/2021/02/08/11/00/kitten-5994369_960_720.jpg', content: 'Cute Dog!', createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, albumId: 1, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/13/12/35/tiger-turtle-7011048_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: 5, imageUrl: 'https://cdn.pixabay.com/photo/2022/01/02/19/43/port-6910972_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 6, albumId: 7, imageUrl: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/battleship-389274_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 5, albumId: 6, imageUrl: 'https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 7, albumId: 8, imageUrl: 'https://cdn.pixabay.com/photo/2022/03/04/09/02/winter-7046891_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 7, albumId: 8, imageUrl: 'https://cdn.pixabay.com/photo/2014/10/23/18/56/tiger-500118_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 5, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/09/20/52/labrador-retriever-7004193_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2022/01/26/20/43/baboon-6969935_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2022/01/10/18/09/budapest-6928973_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/06/06/24/mountains-6996317_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2021/02/24/20/53/abstract-6047465_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2022/01/25/12/16/mug-6966047_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2022/03/08/10/28/beach-7055511_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 6, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 7, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2022/01/20/03/23/space-6951379_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
      {userId: 7, albumId: null, imageUrl: 'https://cdn.pixabay.com/photo/2021/11/11/16/05/fruits-6786607_960_720.jpg', content: 'Lorem ipsum dolor sit amet', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', {});
  }
};
