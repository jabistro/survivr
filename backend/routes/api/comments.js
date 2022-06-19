const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment } = require('../../db/models');
// const { validateCreate } = require('../../utils/validations/images')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll()
    return res.json(comments);
}));

router.post('/', asyncHandler(async (req, res) => {
    const comment = await Comment.create(req.body);
    res.json(comment);
}));

router.put('/', asyncHandler(async (req, res) => {
    const {
        id,
        userId,
        imageId,
        comment
    } = req.body

    const editComment = await Comment.findByPk(id)
    const newComment = await editComment.update(
        {
            userId,
            imageId,
            comment
        })
    return res.json(newComment)
}))

router.delete('/', asyncHandler(async (req, res) => {
    const deleteComment = await Comment.findByPk(req.body.id)
    await deleteComment.destroy()
    return res.json(req.body.id)
}))

module.exports = router;
