const express = require('express');
const router  = express.Router();


// controllers
const { createCategoryController, getLatestCategoryController, getCategoryBySlugNameController, removeCategoryBySlugNameController, updateCategoryBySlugNameController } = require('../controllers/category.controller');

//middleware
const {authCheck, adminCheck} =require('../middlewares/auth.middleware');

router.route('/category').post(authCheck,adminCheck,createCategoryController);
router.route('/categories').get(getLatestCategoryController);
router.route('/category/:slug')
 .get(getCategoryBySlugNameController)
 .patch(authCheck,adminCheck,updateCategoryBySlugNameController)
 .delete(removeCategoryBySlugNameController)


module.exports=router;