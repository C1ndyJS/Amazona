const {config} = require('dotenv');
const express = require('express');
const { sequelize } = require('./database/db'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const Producto = require('./models/Product');
const Usuario = require('./models/Usuario');
const Orden = require('./models/Orden');
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
    } });

app.post(`${api}/usuarios`, async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.json(nuevoUsuario);
    } catch (error) {
        console.error('Error al crear un nuevo usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });


app.get(`${api}/ordenes`, async (req, res) => {
    try {
        const ordenes = await Orden.findAll();
        res.json(ordenes);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }});

app.post(`${api}/ordenes`, async (req, res) => {
    try {
        const nuevaOrden = await Orden.create(req.body);
        res.json(nuevaOrden);
    } catch (error) {
        console.error('Error al crear una nueva orden:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);


sequelize.sync()
    .then(() => {
        console.log('Tablas sincronizadas');
        app.listen(3000, ()=>{
            console.log('server is running http://localhost:3000');
        })
    })
    .catch((error) => {
        console.error('Error al sincronizar las tablas:', error);
    });

//const connection = require('./database/db');


