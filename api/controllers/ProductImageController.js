const { product_image, product } = require('../models');


class ProductImageController {
    static async getPI(req, res) {
        try {
            let result = await product_image.findAll({
                include: [product]
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(404).json({
                message: `404: List product_image not found`
            })
        }
    }

    static async addPI(req, res) {
        try {
            const { 
                prim_filename, 
                prim_filesize, 
                prim_filetype, 
                prim_primary,
                // productId
             } = req.body;
            const productId = +req.userData.id;

            let result = await product_image.create({ 
                prim_filename, 
                prim_filesize, 
                prim_filetype, 
                prim_primary,
                productId
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }

    static async editPI(req, res) {
        try{
            const id = +req.params.id;
            const productId = +req.userData.id;

            const { 
                prim_filename, 
                prim_filesize, 
                prim_filetype, 
                prim_primary 
            } = req.body;

            let result = await product_image.update({
                prim_filename, 
                prim_filesize, 
                prim_filetype, 
                prim_primary,
                productId
            }, {
                where: {
                    id
                }
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

    static async deletePI(req, res) {
        try {
            const id = +req.params.id;
            const productId = +req.userData.id;

            let result = await product_image.destroy({
                where: {
                    id, productId
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

    static async getPIById(req, res) {
        try {
            const id = +req.params.id;
            const productId = +req.userData.id;
            
            let result = await product_image.findAll({
                where: {id, productId}
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(400).json({
                message: `400: Syntax Error`
            })
        }
    }
}

module.exports = ProductImageController;