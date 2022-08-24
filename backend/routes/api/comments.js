const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { Comment, User } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
// const { validateCreate } = require('../../utils/validations/images')

const router = express.Router();

// const validateComments = [
//     check('content')
//         .notEmpty()
//         .withMessage('Please enter a comment.'),
//     handleValidationErrors
// ];

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
}))

router.post('/', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { content, imageId, userId } = req.body;
    const comment = await Comment.create({
        content: content,
        userId: userId,
        imageId: imageId
    })
    const newComment = await Comment.findByPk(comment.id, {
        include: User
    });
    return res.json(newComment);
}))

router.put('/:commentId', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const oldComment = await Comment.findByPk(commentId);
    const { content } = req.body;
    await oldComment.update({
        content
    })
    const comment = await Comment.findByPk(commentId, {
        include: User
    });
    return res.json(comment);
}))

router.delete('/:commentId', requireAuth, asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const deleteComment = await Comment.findByPk(commentId);
    await deleteComment.destroy();
    return res.json(deleteComment);
}))


module.exports = router;




// router.get('/', asyncHandler(async (req, res) => {
//     const comments = await Comment.findAll()
//     return res.json(comments);
// }));

// router.post('/', asyncHandler(async (req, res) => {
//     const comment = await Comment.create(req.body);
//     res.json(comment);
// }));

// router.put('/', asyncHandler(async (req, res) => {
//     const {
//         id,
//         userId,
//         imageId,
//         comment
//     } = req.body

//     const editComment = await Comment.findByPk(id)
//     const newComment = await editComment.update(
//         {
//             userId,
//             imageId,
//             comment
//         })
//     return res.json(newComment)
// }))

// router.delete('/', asyncHandler(async (req, res) => {
//     const deleteComment = await Comment.findByPk(req.body.id)
//     await deleteComment.destroy()
//     return res.json(req.body.id)
// }))
