const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validations/validation');
const { validateCreate } = require('../../utils/validations/images')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll()
    return res.json(images);
}));

router.post('/', asyncHandler(async (req, res) => {
    const image = await Image.create(req.body);
    res.json(image);
}));

module.exports = router;
