

const express = require('express');
const router = express.Router();
const signinController = require('../controllers/signinController');

router.post('/', signinController.postdata);
// router.post('/', signinController.updateData);


module.exports=router;
