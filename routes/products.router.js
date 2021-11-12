const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { productsController } = require('../controllers');
const jwtCheck = require("../middlewares/jwt.Middleware");
//const verifyToken = require('../middlewares/verifyToken');

//get product
router.get('/:id', jwtCheck, productsController.getProduct);
//get all products
router.get('/', productsController.getProducts);

//Create product
router.post('/',
    body('name', 'El nombre del producto es requerido').exists(),
    body('desc', 'La descripción del producto es requerida').exists(),
    body('price', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('state', 'El estado del producto debe ser disponible/no disponible').isBoolean()
    , jwtCheck, productsController.createProduct);

//Update product
router.put('/:id',
    body('name', 'El nombre del producto es requerido').exists(),
    body('desc', 'La descripción del producto es requerida').exists(),
    body('price', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('state', 'El estado del producto debe ser disponible/no disponible').isBoolean()
    , jwtCheck, productsController.updateProduct);

//Delete product
router.delete('/:id', jwtCheck, productsController.deleteProduct);

module.exports = router;