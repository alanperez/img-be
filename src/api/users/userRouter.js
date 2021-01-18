import express from 'express';
import restrict from '../auth/restrict'
import upload from '../../utils/multer';
import {registerUser, loginUser, userViewOwnImages, userViewImagesByID, retrieveUsers} from './userController'
const router = express.Router();




router.get('/', retrieveUsers);
//  View each specific post, but must be logged in.
router.get('/view/image/:id',restrict, userViewImagesByID )

// retrieves all images of specific user and verifies the token
// the users view their images that they have uploaded

router.get('/view/uploaded-images',restrict, userViewOwnImages )

router.post('/register', registerUser)

router.post('/login', loginUser)





// Authenticated User can upload an image
router.post('/image/upload', restrict, upload.single("photos"), function(req, res, next) {
  let user = req.decoded
  console.log('console the fucking user', user)
  console.log(req.file);
  try {
    if(req.file) {
      Images.insertProblem({
         image_url: req.file.path,
         tag: req.body.tag,
         user_id: user.id
      }).then((image) => {
        res.status(200).json({message:'iot worked', image})
        next()
      })
    }
  } catch (error) {
    res
    .status(500)
    .json({ message: `The reason you're getting an error: ${error}` });
  }
});


module.exports = router;