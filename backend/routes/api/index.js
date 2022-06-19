const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images');
const albumsRouter = require('./albums');
const commentsRouter = require('./comments');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/images', imagesRouter);

router.use('/albums', albumsRouter);

router.use('/comments', commentsRouter);

// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
