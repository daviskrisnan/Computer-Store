const LineItemRoute = require('express').Router();
const LineItemController = require('../controllers/LineItemController');
const { authentication } = require('../middlewares/auth');


LineItemRoute.get('/', LineItemController.getLineItem);
LineItemRoute.post('/add', authentication, LineItemController.addLineItem);
LineItemRoute.put('/:id', authentication, LineItemController.editLineItem);
LineItemRoute.delete('/:id', authentication, LineItemController.deleteLineItem);
LineItemRoute.get('/info/:id', authentication, LineItemController.getLineItemById);

module.exports = LineItemRoute;