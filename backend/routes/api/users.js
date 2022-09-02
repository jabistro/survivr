const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { singleMulterUpload } = require('../../awsS3');
const { singlePublicFileUpload } = require('../../awsS3');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validations/validation');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

router.get('/', asyncHandler(async (req, res) => {
    const users = await User.findAll()
    return res.json(users);
}));

router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });
    await setTokenCookie(res, user);
    return res.json(user);
}));

router.put('/', singleMulterUpload("pfpURL"), asyncHandler(async (req, res) => {
    let {
        id,
        username,
        email,
        // pfpURL,
        // password
    } = req.body

    let pfpURL;

    if (req.file) {
        pfpURL = await singlePublicFileUpload(req.file);
    }

    const editUser = await User.findByPk(id)
    const newUser = await editUser.update({
        username,
        email,
        pfpURL: pfpURL || editUser.pfpURL,
        // password
    });
    return res.json(newUser)
}));

router.get('/:userId/likes', asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const likes = await Like.findAll({
        order: [['createdAt', 'DESC']],
        where: {
            userId: userId
        },
        include: [User, Image]
    })
    return res.json(likes);
}))

module.exports = router;
