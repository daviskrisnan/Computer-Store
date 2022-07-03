const shoppingCartRoute = require('express').Router();
const ShoppingCartController = require('../controllers/ShoppingCartController');
const { authentication } = require('../middlewares/auth')

shoppingCartRoute.get('/', ShoppingCartController.getCart);
shoppingCartRoute.post('/add', authentication, ShoppingCartController.addCart);
shoppingCartRoute.put('/:id', authentication, ShoppingCartController.editCart);
shoppingCartRoute.delete('/:id', authentication, ShoppingCartController.deleteCart);
shoppingCartRoute.get('/info/:id', authentication, ShoppingCartController.getCartById);

module.exports = shoppingCartRoute;