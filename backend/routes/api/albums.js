const express = require('express');
const asyncHandler = require('express-async-handler');

const { Album } = require('../../db/models');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validations/validation');
// const { validateCreate } = require('../../utils/validations/images')

const router = express.Router();

router.get('/:userId', asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const albums = await Album.findAll({ where: { userId } }); // array of objects
    res.json(albums);
}));

module.exports = router;
