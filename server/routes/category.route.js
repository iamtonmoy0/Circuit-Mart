const express = require('express');
const router  = express.Router();


// controllers
// const { createOrUpdateUserController, currentUserController } = require('../controllers/auth.controller');

//middleware
const {authCheck, adminCheck} =require('../middlewares/auth.middleware');
const { createCategoryController } = require('../controllers/category.controller');

router.route('/category').post(authCheck,adminCheck,createCategoryController);


module.exports=router;