require('./product.model');
const Product = require('mongoose').model('Product')

exports.getProducts = async (filterstring) => {
    const filters = JSON.parse(filterstring);
    const productCountPipeline = [];
    const aggregatePipeline = buildAggregatePipeline(filters, productCountPipeline);
    console.log('aggregatePipeline', aggregatePipeline)

    try {
        const products = await Product.aggregate(aggregatePipeline)
        // console.log('products', products)
        
        const productCount = await getProductCount(productCountPipeline)

        return { products, productCount };
    } catch (error) {
        let errorX = new Error()
        // error.message = errorX.message
        // error.statusCode = errorX.statusCode;
        throw error
    }
}

const buildAggregatePipeline = (filters, productCountPipeline) => {
    let { brands, priceRanges, rating, pageNo, pageSize, sortFilter } = filters;
    // console.log('pageSize', pageSize)

    let aggregatePipeline = [];

    let brandMatch = buildBrandMatch(brands);
    if (brandMatch) {
        aggregatePipeline.push(brandMatch);
        productCountPipeline.push(brandMatch);
    }

    let priceMatch = buildPriceRangeMatch(priceRanges);
    if (priceMatch) {
        aggregatePipeline.push(priceMatch)
        productCountPipeline.push(priceMatch);
    }

    let ratingMatch = buildRatingMatch(rating);
    if (ratingMatch) {
        aggregatePipeline.push(ratingMatch)
        productCountPipeline.push(ratingMatch);
    }

    aggregatePipeline.push(buildSortMatch(sortFilter));
    checkForEmptyAggregate(aggregatePipeline);
    checkForEmptyAggregate(productCountPipeline);    
    aggregatePipeline.push(buildPageNumberFilter(pageNo, pageSize));
    aggregatePipeline.push(buildPageSizeFilter(pageSize));

    return aggregatePipeline;
}

const getProductCount = async (productCountPipeline) => {
    let productCount;
    productCountPipeline.push({$count: 'productCount'})

    productCount = await Product.aggregate(productCountPipeline)

    if(productCount.length) {
        return productCount[0].productCount
    }

    return 0;
    
}

const buildPriceRangeMatch = (priceRanges) => {
    if (priceRanges.length) {
        let filter = [];
        let priceMatches = [];

        for (let priceRange of priceRanges) {
            priceMatches.push(
                {
                    $and: [
                        { $gte: ['$price', +priceRange.low] },
                        { $lte: ['$price', +priceRange.high] }
                    ]
                })
        }

        return { $match: { $expr: { $or: priceMatches } } }
    }
}

const buildBrandMatch = (brands) => {
    if (brands.length) {
        return { $match: { brand: { $in: brands } } }
    }
    return null;
}

const buildRatingMatch = (rating) => {
    if (!isNaN(rating) && rating) {
        return { $match: { rating: rating.toString() } }
    }

    return null;
}

const buildSortMatch = (sortFilter) => {
    let filter;
    if (sortFilter.field == 'price') {
        filter = { $sort: { price: sortFilter.direction } }
    } else if (sortFilter.field == 'rating') {
        filter = { $sort: { rating: sortFilter.direction } }
    }

    return filter;
}

const buildPageNumberFilter = (pageNo, pageSize) => {
    let skip = (pageNo - 1) * pageSize;

    return { $skip: skip };
}

const buildPageSizeFilter = (pageSize) => {
    return { $limit: pageSize };
}

const checkForEmptyAggregate = (aggregatePipeline) => {
    if (aggregatePipeline.length === 0) {
        aggregatePipeline.push({ $match: { brand: { $ne: null } } });
    }
}