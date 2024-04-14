const {config} = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const { sequelize } = require('./database/db'); 
const Producto = require('./src/models/Producto');
const Usuario = require('./src/models/usuario');


const app = express();

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api = process.env.API_URL;

//RUtas

app.get(`${api}/productos`, async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.post(`${api}/usuarios`, async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.json(nuevoUsuario);
    } catch (error) {
        console.error('Error al crear un nuevo usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

const connection = require('./database/db');


app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})