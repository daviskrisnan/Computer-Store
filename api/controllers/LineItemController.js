const { line_item, product, shopping_cart, order } = require('../models');


class LineItemController {
    static async getLineItem(req, res) {
        try {
            let result = await line_item.findAll({
                include: [ product, shopping_cart, order ]
            })

            res.status(200).json(result)
        } catch(err) {
            console.log(err);
            res.status(404).json('err')
        }
    }

    static async addLineItem(req, res) {
        try {
            const { 
                line_qty, 
                line_status, 
             } = req.body;
            const productId = +req.userData.id;
            const shoppingCartId = +req.userData.id;
            const orderId = +req.userData.id;

            let result = await line_item.create({ 
                line_qty, 
                line_status, 
                productId, 
                shoppingCartId, 
                orderId
             })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async editLineItem(req, res) {
        try{
            const id = +req.params.id;
            const productId = +req.userData.id;
            const shoppingCartId = +req.userData.id;
            const orderId = +req.userData.id;
            const { 
                line_qty, 
                line_status, 
            } = req.body;

            let result = await line_item.update({
                line_qty, 
                line_status,
                productId,
                shoppingCartId,
                orderId
            }, {
                where: { id }
            })

            result[0] === 1 ?
                res.status(200).json({
                    message: `id: ${id} has been updated...`
                })
                :
                res.status(500).json({
                    message: `id: ${id} cannot updated...`
                })
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async deleteLineItem(req, res) {
        try {
            const id = +req.params.id;
            const productId = +req.userData.id;
            const shoppingCartId = +req.userData.id;
            const orderId = +req.userData.id;

            let result = await line_item.destroy({
                where: {
                    id, productId, shoppingCartId, orderId
                }
            })

            result === 1 ?
                res.status(200).json({
                    message: `id: ${id} has been removed...`
                })
                :
                res.status(500).json({
                    message: `id: ${id} cannot removed...`
                })
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async getLineItemById(req, res) {
        try {
            const id = +req.params.id;
            const productId = +req.userData.id;
            const shoppingCartId = +req.userData.id;
            const orderId = +req.userData.id;
            
            let result = await line_item.findById({
                where: {
                    id, productId, shoppingCartId, orderId
                }
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }
}

module.exports = LineItemController;