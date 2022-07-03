const orderRoute = require('express').Router();
const OrderController = require('../controllers/OrderController');
const { authentication } = require('../middlewares/auth');

orderRoute.get('/order_list', OrderController.getOrder);
orderRoute.get('/transaction/:id', OrderController.getTransaction);
orderRoute.post('/create_order/:id', authentication , OrderController.addOrder);
orderRoute.put('/edit_order/:id', authentication , OrderController.editOrder);
orderRoute.delete('/remove_order/:id', authentication, OrderController.deleteOrder);
orderRoute.get('/detail_order/:id', authentication, OrderController.getOrderById);

module.exports = orderRoute;