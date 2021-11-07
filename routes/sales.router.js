
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { salesController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', verifyToken, salesController.getSale);

router.get('/', verifyToken, salesController.getSales);

router.post('/',
    body('price', 'El valor es requerido y debe ser numerico').exists(),
    body('clientName', 'El Nombre del cliente es requerido').exists(),
    body('clientId', 'La ID del Cliente es requerida').exists(),
    body('sellerId', 'La ID del Vendedor es requerida').exists(),
    body('products', 'productos son requeridos').exists().notEmpty()
    , verifyToken, salesController.createSale);

router.put('/:id',
    body('price', 'El valor es requerido y debe ser numerico').exists(),
    body('clientName', 'El Nombre del cliente es requerido').exists(),
    body('clientId', 'La ID del Cliente es requerida').exists(),
    body('sellerId', 'La ID del Vendedor es requerida').exists(),
    body('products', 'productos son requeridos').exists().notEmpty()
    ,verifyToken, salesController.updateSale);

router.delete('/:id', verifyToken, salesController.deleteSale);

module.exports = router;
