const { order, user, line_items, shoppingcart, product } = require('../models');
const crypto = require('crypto');


class OrderController {
    static async getOrder(req, res) {
        try {
            let id = +req.userData.id;
            let result = await order.findAll({
                where: {
                    userId: id
                },
                include: [user, line_items]
            })

            res.status(200).json(result)
        } catch (err) {
            res.status(404).json({
                message: `404: List order not found`
            })
        }
    }

    static async getTransaction(req, res) {
        try {
            let id = +req.params.id;
            let result = await order.findOne({
                where: {
                    id: id
                }, include: [user, line_items]
            })
            res.status(200).json(result);
        } catch (err) {
            res.status(404).json(err.message)
        }
    }

    static async addOrder(req, res) {
        try {
            const productId = +req.params.id;
            const userId = +req.userData.id;
            const { order_total_qty, order_city, order_addres } = req.body;
            const order_subtotal = order_total_qty;

            const order_created_on = new Date();
            const order_payt_trx_number = crypto.randomBytes(16).toString("hex");

            let product_file = await product.findByPk(productId);
            let tax = 0.1;
            let product_price = +product_file.prod_price;
            let total_harga = product_price + product_price * tax;
            const order_total_due = +total_harga;

            let orderId_user = await order.findOne({
                order: [["createdAt", "DESC"]]
            })
            const orderId = orderId_user.id + 1;

            let shoppingId_user = await shoppingcart.findOne({
                order: [["createdAt", "DESC"]]
            })
            const shoppingCartId = shoppingId_user.id + 1;

            const shop_created_on = new Date();
            let createShoppingCart = await shoppingcart.create({
                shop_created_on, userId
            })
            let createItems = await line_items.create({
                productId, shoppingCartId, orderId
            })
            let createOrder = await order.create({
                order_created_on,
                order_subtotal,
                order_total_due,
                order_total_qty,
                order_payt_trx_number,
                order_city,
                order_addres,
                userId
            })

            res.status(200).json({
                message: "Success Order"
            })
        } catch (err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async editOrder(req, res) {
        try {
            const id = +req.params.id;
            const userId = +req.userData.id;
            const { order_total_qty, order_city, order_addres } = req.body;

            let discount = 0;
            if (Number(order_total_qty) >= 2) {
                discount = 0.05;
            } else {
                discount = 0;
            }
            let tax = 0.1;
            const order_discount = +discount;

            let product_file = await line_items.findOne({
                where: {
                    orderId: id
                }, include: [product]
            });

            let product_price = Number(product_file.product.prod_price);
            let all_price_product = product_price * order_total_qty;
            let total_harga = all_price_product + all_price_product * tax - all_price_product * (Number(discount));
            const order_total_due = +total_harga;

            const order_subtotal = order_total_qty;
            const order_created_on = new Date();
            const order_payt_trx_number = crypto.randomBytes(16).toString("hex");

            let updateOrder = await order.update({
                order_created_on,
                order_subtotal,
                order_discount,
                // order_tax,
                order_total_due,
                order_total_qty,
                order_payt_trx_number,
                order_city,
                order_addres,
                // order_status,
                userId
            }, {
                where: { id }
            })

            updateOrder[0] === 1 ?
                res.status(200).json({
                    message: `id: ${id} has been updated...`
                })
                :
                res.status(500).json({
                    message: `id: ${id} cannot updated...`
                })
        } catch (err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async deleteOrder(req, res) {
        try {
            const id = +req.params.id;
            const userId = +req.userData.id;

            let deleteOrder = await order.destroy({
                where: { id: id }
            })

            let deleteItems = await line_items.destroy({
                where: { orderId: id }
            })

            deleteOrder === 1 ?
                res.status(200).json({
                    message: `id: ${id} has been removed...`
                })
                :
                res.status(500).json({
                    message: `id: ${id} cannot removed...`
                })
        } catch (err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async getOrderById(req, res) {
        try {
            const id = +req.params.id;
            const userId = +req.userData.id;

            let result = await order.findAll({
                where: { id, userId }
            })
            res.status(200).json(result)
        } catch (err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }
}

module.exports = OrderController;