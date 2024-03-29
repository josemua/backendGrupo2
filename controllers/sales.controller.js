const SaleSchema = require('../models/sale');
const ProductSchema = require('../models/product');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const getSale = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let sale = await SaleSchema.findById(req.params.id);
            res.status(200).json({ data: sale });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Venta no encontrada"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID no encontado"
            }
        })
    }
}

const getSales = async (req, res) => {
    try {req.params
        let sales = await SaleSchema.find();
        res.status(200).json({ data: sales });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const createSale = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
 

    req.body.products.forEach( async (element) => {
            if(mongoose.Types.ObjectId.isValid(element._id)){
                let product = await ProductSchema.findById(element._id);
                if(!product) {
                    return res.status(400).json({
                        error: {
                            code: 404,
                            message: `Producto con id:${element._id} no existe`
                        }
                    })
                }
            }else{
                return res.status(400).json({
                    error: {
                        code: 404,
                        message: `Producto con id:${element._id} no es valido`
                    }
                })
            }
    }); 

    let sale = new SaleSchema(req.body);
    try {
        await sale.save();
        res.status(201).json({ data: sale });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const updateSale = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    try {
        let newSale = {
            id: req.params.id,
            price: req.body.price,
            clientName: req.body.clientName,
            clientId: req.body.clientId,
            sellerId: req.body.SellerId,
            status: req.body.status,
            products: req.body.products
        }
        await SaleSchema.findByIdAndUpdate(req.params.id, newSale);
        res.status(201).json({ data: newSale })
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID no encontrado"
            }
        })
    }
}


const deleteSale = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await SaleSchema.findByIdAndRemove(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Venta no encontrada"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID no encontrado"
            }
        })
    }
}

module.exports.getSale = getSale;
module.exports.getSales = getSales;
module.exports.createSale = createSale;
module.exports.updateSale = updateSale;
module.exports.deleteSale = deleteSale;