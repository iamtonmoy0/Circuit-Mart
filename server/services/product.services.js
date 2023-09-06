const productModel = require('../models/product.model');
const slugify = require('slugify')
// create product
exports.createProductServices = async (data) => {
	data.slug = slugify(data.title);
	const product = await productModel.create(data);
	return product;
}