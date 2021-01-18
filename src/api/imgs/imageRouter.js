import express from 'express';
const db = require('../../data/dbConig')
import Images from './imageModel'
import { retrieveJoinedImages,retrieveImageByID } from './imageController'
import {verifyImageOwner} from '../auth/verifyCheck'
import restrict from '../../config/restrict'
const router = express.Router();

// view all images
router.get('/', retrieveJoinedImages)

router.get('/:id', retrieveImageByID)

  // allow to view images of specefic user
//   list of images that the user has posted
  router.get('/view/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const images = await db('images')
      .join('users', 'users.id', 'images.user_id')
      .select('images.id', 'users.username', 'images.tag', 'images.image_url')
      .where({user_id: id})
      res.status(200).json(images)
    }catch(error) {
      res.status(500).json({message: "can't get imagee"})
    }
  
  });


  router.get(
    "/profile/:imgid",
    restrict,
    verifyImageOwner,
    async ({ params: { imgid } }, res) => {
      try {
        const retrieve = await Images.findUser(imgid);
        if(retrieve) {
          return res.status(200).json(retrieve)

        }
           res.status(400).json({ message: "Images not deleted" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error:", error });
      }
    }
  );
// allows user to delete THEIR own post. 
  router.delete(
    "/:imgid",
    restrict,
    verifyImageOwner,
    async ({ params: { imgid } }, res) => {
      try {
        const deleted = await Images.remove(imgid);
        if(deleted) {
          return res.status(200).json({message: "Image deleted successfully"})

        }
           res.status(400).json({ message: "Images not deleted" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error:", error });
      }
    }
  );

module.exports = router;