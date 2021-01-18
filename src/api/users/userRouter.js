const express = require('express')
const restrict = require('../auth/restrict')
const {retrieveUsers, userViewOwnImages, loginUser, registerUser} = require('./userController')

const router = express.Router();


router.get('/', retrieveUsers);

// retrieves all images of specific user and verifies the token
// the users view their images that they have uploaded

router.get('/view/uploaded-images',restrict, userViewOwnImages )
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router;