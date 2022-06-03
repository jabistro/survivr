const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');


const albumId =
    check('albumId')
        .notEmpty()
        .withMessage('albumId must not be empty.');

const imageURL =
    check('imageURL')
        .notEmpty()
        .isURL()
        .withMessage('URL for image must be a valid URL.');

exports.validateCreate = [
    albumId,
    imageURL,
    handleValidationErrors
];
