import express from 'express'
import { authUser, registerUser, logoutUser, getUserProfile,updateUserProfile } from '../controllers/userController.js'; //Since we are using type: module in package.json we need to add .js when importing js files, otherwise module not found error will occur.
const router = express.Router();
router.post('/auth', authUser)

export default router 