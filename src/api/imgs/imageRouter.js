const express = require('express');

const { retrieveJoinedImages,retrieveImageByID } = require('./imageController')

const router = express.Router();

// view all images
router.get('/', retrieveJoinedImages)

router.get('/:id', retrieveImageByID)
module.exports = router;