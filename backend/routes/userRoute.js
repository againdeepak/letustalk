import express from 'express'
const router=express.Router();
import {getUserForSidebar} from '../controllers/userController.js';
import {protectRoute} from '../middleware/protectRoute.js'


router.get('/',protectRoute,getUserForSidebar);


export default router;