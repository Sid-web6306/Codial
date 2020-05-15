const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home-controller');
const userController = require('../controllers/user_controller');
console.log('router loaded');

router.get('/',homeController.home);

//using middleware
router.use('/users',require('./users'));

module.exports = router;