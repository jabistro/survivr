const express = require('express');
const asyncHandler = require('express-async-handler');

const { Album } = require('../../db/models');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validations/validation');
// const { validateCreate } = require('../../utils/validations/images')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const albums = await Album.findAll()
    return res.json(albums);
}));

router.get('/:userId', asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const albums = await Album.findAll({ where: { userId } }); // array of objects
    res.json(albums);
}));

router.post('/', validateCreate, asyncHandler(async (req, res) => {
    const album = await Album.create(req.body);
    res.json(album);
}));

module.exports = router;
