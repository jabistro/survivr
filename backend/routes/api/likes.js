const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Like } = require('../../db/models');

const router = express.Router();

router.get('/images/:imageId', asyncHandler(async (req, res) => {
    const { imageId } = req.params;
    const likes = await Like.findAll({
        where: {
            imageId: imageId
        },
        include: User
    });

    return res.json(likes);
}))

router.post('/', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { userId, imageId } = req.body;
    const newLike = await Like.create({
        userId: userId,
        imageId: imageId
    })
    return res.json(newLike);
}))

router.delete('/:likeId', requireAuth, asyncHandler(async (req, res) => {
    const { likeId } = req.params;
    const deleteLike = await Like.findByPk(likeId);
    await deleteLike.destroy();
    return res.json(deleteLike);
}))

module.exports = router;
