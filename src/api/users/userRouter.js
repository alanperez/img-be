import express from 'express';
import {retrieveUsers} from './userController'

const router = express.Router();


router.get('/', retrieveUsers);



module.exports = router;