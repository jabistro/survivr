const express = require('express');
const asyncHandler = require('express-async-handler');
// const { requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');
// const { check } = require('express-validator');
const { validateCreate } = require('../../utils/validations/images');
const { singleMulterUpload } = require('../../awsS3');
const { singlePublicFileUpload } = require('../../awsS3');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll()
    return res.json(images);
}));

router.post('/', singleMulterUpload("image"), validateCreate, asyncHandler(async (req, res) => {
    const { caption, albumId, userId, title } = req.body;
    const imageURL = await singlePublicFileUpload(req.file);
    const image = await Image.create({ caption, albumId, imageURL, userId, title });
    res.json(image);
}));

router.put('/', singleMulterUpload("image"), validateCreate, asyncHandler(async (req, res) => {
    let {
        id,
        title,
        imageURL,
        albumId,
        caption
    } = req.body

    if (req.file) {
        imageURL = await singlePublicFileUpload(req.file);
    }

    const editImage = await Image.findByPk(id)
    const newImage = await editImage.update(
        {
            title,
            imageURL,
            albumId,
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
