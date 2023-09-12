const productModel = require('../models/product.model');
const slugify = require('slugify')
// create product
exports.createProductServices = async (data) => {
	data.slug = slugify(data.title);
	const product = await productModel.create(data);
	return product;
}
// get product by limit
exports.getProductByQueryServices=async(limit)=>{
	return await productModel.find({}).limit(parseInt(limit)).populate("category").populate("subs").sort([['createdAt','desc']])
}

// remove product by id
exports.deleteProductByIdServices=async(id)=>{
	return await productModel.findByIdAndRemove(id)
}
// get product by slug
exports.getProductBySlugServices=async(slug)=>{
	return await productModel.findOne({slug:slug}).populate('category').populate('subs')
}