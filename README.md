http://localhost:4000/usuarios/ POST - Register
{
    "name": "Jose Muñoz",
    "email": "Jose@gmail.com",
    "password": "12345678",
    "tel": "3003704072",
    "isAdmin": true,
    "status": "Autorizado"
}
http://localhost:4000/auth/login POST - Login
{
    "email": "Jose@gmail.com",
    "password": "12345678"
}
guardar el token

Headers- 
Key: auth-token  value:token

http://localhost:4000/auth/verifyToken GET - verificar token

http://localhost:4000/usuarios/:id GET - getUser
http://localhost:4000/usuarios/ GET - getusers
http://localhost:4000/usuarios/:id  - PUT - UpdateUser
{
    "name": "Jose Muñoz Alvarez",
    "email": "Jose@gmail.com",
    "password": "12345678"
}
http://localhost:4000/usuarios/:id - DELETE - deleteUser

http://localhost:4000/productos/ POST - addProducts
{
    "name": "Leche",
    "desc": "Colanta",
    "price": 2200,
    "state": true
}
http://localhost:4000/productos/:id GET - getProduct
http://localhost:4000/productos/ GET - getProducts
http://localhost:4000/productos/:id PUT - 
{
    "name": "Mercurio",
    "desc": "Planeta del sistema solar",
    "price": 100000,
    "state": false
}
http://localhost:4000/productos/:id - DELETE - deleteProduct

http://localhost:4000/ventas/ POST - addSale
{
    "price": 900000,
    "clientName": "Jose",
    "clientId": "617a14d0203fa1e972ead871",
    "sellerId": "617a1469203fa1e972ead86c",
    "status": "Entregada",
    "products": [
        {"_id": "6178f116e07426cc709bf9de", "amount": 1},  {"_id": "6178f3dd9918e4e2a8966b68", "amount": 1}, {"_id": "6178f4119918e4e2a8966b6a", "amount": 1}
        ]
}
http://localhost:4000/ventas/ GET - getSales
http://localhost:4000/ventas/:id - GET - getSale
http://localhost:4000/ventas/:id - PUT - updateSale
http://localhost:4000/ventas/:id - DELETE - deleteSale