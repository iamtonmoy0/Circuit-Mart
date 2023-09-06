const express = require('express');
const router  = express.Router();


// controllers
const  subCategory =require('../controllers/subCategory.controller')
//middleware
const {authCheck, adminCheck} =require('../middlewares/auth.middleware');

router.route('/sub-category').post(authCheck,adminCheck,subCategory.createSubCategoryController);
router.route('/sub-categories').get(subCategory.getLatestSubCategoryController);
router.route('/sub-category/:slug')
 .get(subCategory.getSubCategoryBySlugNameController)
 .patch(authCheck,adminCheck,subCategory.updateSubCategoryBySlugNameController)
 .delete(authCheck,adminCheck,subCategory.removeSubCategoryBySlugNameController)


module.exports=router;