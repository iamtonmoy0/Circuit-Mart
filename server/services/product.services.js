const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const slugify = require('slugify');
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
	return await productModel.findOne({slug:slug}).populate("category").populate("subs");
}
// update product services
exports.updateProductServices=async(slug,data)=>{
data.slug=slugify(data.title);
return await productModel.findOneAndUpdate({slug:slug},data,{new:true})	
}
// get product by sort
exports.getProductBySortServices=async(sorting)=>{
const {sort,order,page}=sorting;
const currentPage = page || 1;
const productPerPage = 3;

return await productModel.find({})
 .skip((currentPage-1) * productPerPage)
 .populate('category')
 .populate('subs')
 .sort([[sort,order]])
 .limit(productPerPage)
}
// product pagination
exports.productPaginationServices=async(pageNo)=>{
	let total = await productModel.find({}).estimatedDocumentCount();
	return total
}

// product star rating services
exports.productStarRatingServices=async(productId,star,user)=>{
const product = await productModel.findById({productId})
const userData = await userModel.find({email:user.email})
// check if current user has rated the product
const existRating = product.ratings.find(elem=>elem.postBy.toString()=== userData._id.toString())
if(existRating === undefined){
const ratingAdded = await productModel.findByIdAndUpdate(product._id,{
	$push:{ratings:{star,postedBy:product._id}}
})
console.log('new rating added',ratingAdded)
return ratingAdded
}else{
	const ratingUpdate = await productModel.updateOne({
		ratings:{$elemMatch:existRating}
	},
	{ $set: { "ratings.$.star": star } },
	{ new: true }
	)
	return ratingUpdate
}
}
