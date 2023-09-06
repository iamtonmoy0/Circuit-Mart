const express = require('express');
const router  = express.Router();


// controllers
const categoryController = require('../controllers/category.controller');

//middleware
const {authCheck, adminCheck} =require('../middlewares/auth.middleware');

router.route('/category').post(authCheck,adminCheck,categoryController.createCategoryController);
router.route('/categories').get(categoryController.getLatestCategoryController);
router.route('/category/:slug')
 .get(categoryController.getCategoryBySlugNameController)
 .patch(authCheck,adminCheck,categoryController.updateCategoryBySlugNameController)
 .delete(authCheck,adminCheck,categoryController.removeCategoryBySlugNameController)


module.exports=router;