const productImageRoute = require('express').Router();
const ProductImageController = require('../controllers/ProductImageController');
const { authentication } = require('../middlewares/auth');
const upload = require('../middlewares/multer');


productImageRoute.get('/', ProductImageController.getPI);
productImageRoute.post('/add', authentication, ProductImageController.addPI);
productImageRoute.put('/:id', authentication, ProductImageController.editPI);
productImageRoute.delete('/:id', authentication, ProductImageController.deletePI);
productImageRoute.get('/info/:id', authentication, ProductImageController.getPIById);

module.exports = productImageRoute;