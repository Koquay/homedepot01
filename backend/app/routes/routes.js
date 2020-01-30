const IndexRoutes = require('../index/index.routes');
const UserRoutes = require('../user/user.routes');
const ProductRoutes = require('../product/product.routes');
const OrderRoutes = require('../order/order.routes');


module.exports = (app) => {
    app.use('/api/order', OrderRoutes);
    app.use('/api/brand', ProductRoutes);
    app.use('/api/user', UserRoutes)
    app.use('/*', IndexRoutes)
}