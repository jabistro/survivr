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

router.post('/', asyncHandler(async (req, res) => {
    const album = await Album.create(req.body);
    res.json(album);
}));

router.put('/', asyncHandler(async (req, res) => {
    const {
        id,
        userId,
        title,
        description
    } = req.body

    const editAlbum = await Album.findByPk(id)
    const newAlbum = await editAlbum.update(
        {
            userId,
            title,
            description
        })
    return res.json(newAlbum)
}))

router.delete('/', asyncHandler(async (req, res) => {
    const deleteAlbum = await Album.findByPk(req.body.id)
    await deleteAlbum.destroy()
    return res.json(req.body.id)
}))

module.exports = router;
