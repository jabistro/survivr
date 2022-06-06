const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');
const { check } = require('express-validator');
const { validateCreate } = require('../../utils/validations/images')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll()
    return res.json(images);
}));

router.post('/', validateCreate, asyncHandler(async (req, res) => {
    const image = await Image.create(req.body);
    res.json(image);
}));

router.put('/', validateCreate, asyncHandler(async (req, res) => {
    const {
        id,
        userId,
        imageURL,
        albumId,
        caption,
        imageUsername
    } = req.body

    const editImage = await Image.findByPk(id)
    const newImage = await editImage.update(
        {
            userId,
            imageURL,
            albumId,
            caption,
            imageUsername
        })
    return res.json(newImage)
}))

router.delete('/', asyncHandler(async (req, res) => {
    const deleteImage = await Image.findByPk(req.body.id)
    await deleteImage.destroy()
    return res.json(req.body.id)
}))

module.exports = router;
