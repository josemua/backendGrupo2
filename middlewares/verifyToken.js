const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(403).json({
            error: {
                code: 403,
                msg: 'No tienes un token'
            }
        });
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(403).json({
            error: {
                code: 403,
                msg: 'Usuario no autorizado ¯\_(ツ)_/¯ '
            }
        });
    }
}

const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else{
            res.status(403).json("Usuario no autorizado ¯\_(ツ)_/¯ ");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        } else{
            res.status(403).json("Usuario no autorizado ¯\_(ツ)_/¯ ");
        }
    });
};

module.exports = verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin;