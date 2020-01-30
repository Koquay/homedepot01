const ProductService = require('./product.service')

exports.getProducts = async (req, res) => {
    // console.log('req.query', req.query);

    try {
        const productData = await ProductService.getProducts(req.query.filters);
        return res.status(200).json(productData);
    } catch(error) {
        throw error;
    }
}