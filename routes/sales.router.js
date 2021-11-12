
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { salesController } = require('../controllers');
const jwtCheck = require("../middlewares/jwt.Middleware");
//const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', jwtCheck, salesController.getSale);

router.get('/', jwtCheck, salesController.getSales);

router.post('/',
    body('price', 'El valor es requerido y debe ser numerico').exists(),
    body('clientName', 'El Nombre del cliente es requerido').exists(),
    body('clientId', 'La ID del Cliente es requerida').exists(),
    body('sellerId', 'La ID del Vendedor es requerida').exists(),
    body('products', 'productos son requeridos').exists().notEmpty()
    , jwtCheck, salesController.createSale);

router.put('/:id',
    body('price', 'El valor es requerido y debe ser numerico').exists(),
    body('clientName', 'El Nombre del cliente es requerido').exists(),
    body('clientId', 'La ID del Cliente es requerida').exists(),
    body('sellerId', 'La ID del Vendedor es requerida').exists(),
    body('products', 'productos son requeridos').exists().notEmpty()
    ,jwtCheck, salesController.updateSale);

router.delete('/:id', jwtCheck, salesController.deleteSale);

module.exports = router;
