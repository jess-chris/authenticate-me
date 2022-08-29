const router = require('express').Router();

const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User, Image, Album, Sequelize } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);


router.get('/images', asyncHandler(async (req, res) => {
  
  const images = await Image.findAll();
  
  res.json({ images: images });
  

}));


router.get('/images/user/:userId(\\d+)', asyncHandler(async (req, res) => {
  
  const { userId } = req.params;
  const Op = Sequelize.Op;

  const images = await Image.findAll({
    where: {
      userId,
      albumId: {
        [Op.eq]: null
      }
    }
  });
  
  res.json({ images: images });
  

}));



router.get('/images/:id(\\d+)', asyncHandler(async (req, res) => {


  const { id } = req.params;

  const image = await Image.findByPk(id);

  res.json({ image: image });
  
}));


router.post('/images', asyncHandler(async (req, res) => {

  const newImages = {};

  for (let item in req.body) {

    const { base64, name, type, content, albumId, userId } = req.body[item];
  

    const image = await Image.create({
      userId,
      albumId,
      base64,
      name,
      type,
      content
    });

    newImages[name] = image;
  }


  res.json({ requestBody: "OK", images: newImages});
}));


router.put('/images', asyncHandler(async (req, res) => {

  const {id, imageUrl, content, userId} = req.body;

  const image = await Image.findByPk(id);
  image.imageUrl = imageUrl;
  image.content = content;
  await image.save();

  res.json({ requestBody: "OK", image: image});

}));


router.delete('/images/:id(\\d+)', asyncHandler(async (req, res) => {

  const { id } = req.params;

  const image = await Image.findByPk(id);
  await image.destroy();

  res.json({ requestBody: "OK"});
}));



// ALBUM ROUTES \\

router.get('/albums', asyncHandler(async (req, res) => {
  
  const albums = await Album.findAll();
  
  res.json({ albums: albums });
  

}));


router.get('/albums/:id(\\d+)', asyncHandler(async (req, res) => {
  
  const { id } = req.params;
  const Op = Sequelize.Op;

  const album = await Album.findByPk(id);
  const albumImages = await Image.findAll({
    where: {
      albumId: {
        [Op.eq]: id
      }
    }
  });
  
  res.json({ album: album, albumImages: albumImages });
  
}));



router.post('/albums', asyncHandler(async (req, res) => {


  const { title, userId } = req.body;

  const album = await Album.create({
    title,
    userId
  });


  res.json({requestBody: "OK", album: album})

}));


router.put('/albums', asyncHandler(async (req, res) => {

  const { id, images } = req.body;

  for (let x = 0; x < images.length; x++) {

    const image = await Image.findByPk(images[x]);

    image.albumId = id;
    await image.save();
  }

  res.json({ requestBody: "OK"});
}));


router.delete('/albums/:id(\\d+)', asyncHandler(async (req, res) => {

  const { id } = req.params;
  const Op = Sequelize.Op;

  const images = await Image.update(
  {
    albumId: null
  },
  {
    where: {
      albumId: {
        [Op.eq]: id
      }
    }
  });



  const album = await Album.findByPk(id);
  await album.destroy();

  res.json({ requestBody: "OK"});
}));



module.exports = router;