const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/profile',userController.profile);
router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);
router.post('/create',userController.create);
router.post('/create-session',userController.createSession); // same path use in 'view/user_signin_folder'
router.post('/create-session',userController.createSession);
router.get('/sign-out',userController.signOut);



module.exports = router;