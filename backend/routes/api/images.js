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

router.put('/', asyncHandler(async (req, res) => {
    const {
        id,
        userId,
        imageURL,
        caption
    } = req.body

    const editImage = await Image.findByPk(id)
    const newImage = editImage.update(
        {
            userId,
            imageURL,
            caption
        })
    return res.json(newImage)
}))

router.delete('/', asyncHandler(async (req, res) => {
    const deleteImage = await Image.findByPk(req.body.id)
    await deleteImage.destroy()
    return res.json(req.body.id)
}))

module.exports = router;
