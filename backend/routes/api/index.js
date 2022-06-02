const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images');
const albumsRouter = require('./albums');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/images', imagesRouter);

router.use('/albums', albumsRouter);

// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
