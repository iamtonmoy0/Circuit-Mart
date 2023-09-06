const express = require('express');
const router  = express.Router();


// controllers
const  subCategory =require('../controllers/subCategory.controller')
//middleware
const {authCheck, adminCheck} =require('../middlewares/auth.middleware');

router.route('/category').post(authCheck,adminCheck,subCategory.createSubCategoryController);
router.route('/categories').get(subCategory.getLatestSubCategoryController);
router.route('/category/:slug')
 .get(subCategory.getSubCategoryBySlugNameController)
 .patch(authCheck,adminCheck,subCategory.updateSubCategoryBySlugNameController)
 .delete(authCheck,adminCheck,subCategory.removeSubCategoryBySlugNameController)


module.exports=router;