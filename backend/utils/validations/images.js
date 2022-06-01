const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const userId =
    check('userId')
        .notEmpty()
        .withMessage('UserId must not be empty.');

const albumId =
    check('albumId')
        .notEmpty()
        .withMessage('albumId must not be empty.');

const imageURL =
    check('userId')
        .notEmpty()
        .isURL()
        .withMessage('URL for image must be a valid URL.');

exports.validateCreate = [
    userId,
    albumId,
    imageURL,
    handleValidationErrors
];
