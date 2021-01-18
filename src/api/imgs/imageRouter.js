const express = require('express');

const { retrieveJoinedImages } = require('./imageController')

const router = express.Router();

// view all images
router.get('/', retrieveJoinedImages)


module.exports = router;