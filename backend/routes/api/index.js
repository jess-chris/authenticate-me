const router = require('express').Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);




router.get('/images', asyncHandler(async (req, res) => {
  res.json({ requestBody: req.body });
  console.log("IMAGES ROUTE");

}));



router.get('/images/:id', asyncHandler(async (req, res) => {
  res.json({ requestBody: req.body });
  console.log("IMAGE ID ROUTE");
  
}));


router.post('/images', asyncHandler(async (req, res) => {

  res.json({ requestBody: "POST OKAY"});
}));


module.exports = router;