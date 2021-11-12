const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = require('./config/dbConfig');
mongoose.connect(dbConfig.urlDatabase)
.then(db => console.log("Conectado a la BD"))
.catch(err => console.error(err));

app.use(morgan("dev"));

require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`Conectado en el puerto ${port}`)
})

app.get('/', (req, res) =>{
    res.json({ status:200 })
})

const routes = require('./routes');

app.use('/productos', routes.productsRouter);
app.use('/usuarios', routes.usersRouter);
app.use('/auth', routes.authRouter);
app.use('/ventas', routes.salesRouter);