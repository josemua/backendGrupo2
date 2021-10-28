const { Router }  = require('express');
const router = Router();
const { body } = require('express-validator');
const { authController } = require('../controllers')
const verifyToken = require('../middlewares/verifyToken');

router.post('/login',
    body('email', 'El email es requerido')
        .exists(),
    body('password', 'la contraseña es requerida y debe tener minimo 8 caracteres')
        .isLength({ min: 8}),
    authController.login
)

router.get('/verifyToken', verifyToken, authController.validateToken)

module.exports = router;