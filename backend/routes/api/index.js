const router = require('express').Router();

const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User, Image } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);




router.get('/images', asyncHandler(async (req, res) => {
  
  const images = await Image.findAll();
  
  res.json({ images: images });
  

}));



router.get('/images/:id(\\d+)', asyncHandler(async (req, res) => {


  const { id } = req.params;

  const image = await Image.findByPk(id);

  res.json({ image: image });
  
}));


router.post('/images', asyncHandler(async (req, res, next) => {

  const { imageUrl, content, albumId, id} = req.body;

  const image = await Image.create({
    userId: id,
    albumId,
    imageUrl,
    content
  });

  res.json({ requestBody: "OK", image: image});
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

module.exports = router;