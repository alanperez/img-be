import axios from 'axios';
import express from 'express';
import restrict from '../../config/restrict'
import upload from '../../utils/multer';
import Images from '../imgs/imageModel'
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
  console.log(req.file)
  let user = req.decoded
  console.log('console', user)
  console.log('CLG THE REQ FILE', req.file);
  try {
    if(req.file) {
      Images.insertImages({
         image_url: req.file.path,
         tag: req.body.tag,
         user_id: user.id
      }).then( async (image) => {
        // after image has been uploaded, send it to the ML service for processing
        const response = await axios.post('http://localhost:8000/process' , {
          // URL of the uploaded image
          url: req.file.path,
        })
        console.log('result from ML service', response.data)
        // res.status(200).json({message:'iot worked', images:image})
        res.status(200).json({message:'successfully processed image ', images:image, result: response.data})
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