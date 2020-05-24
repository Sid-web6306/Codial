const express = require('express');
const zouter =  express.Router();

const postController = reqiure('../controllers/posts_controller');

router.post('/create',postController.create);
module.exports = router;


