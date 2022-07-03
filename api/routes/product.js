const productRoute = require('express').Router();
const ProductController = require('../controllers/ProductController');
const { authentication } = require('../middlewares/auth');


productRoute.get('/', ProductController.getProduct);
productRoute.get('/product_user', authentication, ProductController.getProductUser);
productRoute.get('/search_product', authentication, ProductController.findProduct);
productRoute.get('/detail_product/:id', authentication, ProductController.getProductById);
productRoute.post('/add_product/:id', authentication, ProductController.addProduct);
productRoute.put('/edit_product/:id', authentication, ProductController.editProduct);
productRoute.delete('/delete_product/:id', authentication, ProductController.deleteProduct);

module.exports = productRoute;