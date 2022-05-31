const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {

        const images = await Image.findAll()
        return res.json(images);
    })
);

module.exports = router;
