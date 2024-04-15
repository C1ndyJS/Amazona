const {config} = require('dotenv');
const express = require('express');
const sequelize = require('./src/database/db'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const Producto = require('./src/models/Product');
const Usuario = require('./src/models/Usuario');
const Orden = require('./src/models/Orden');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api = process.env.API_URL;

//Routes
//const routes = require('./src/routes');
//app.use(api, routes);

const productRoutes = require('./src/routes/product.route');
const ordenRoutes = require('./src/routes/orden.route');
const clientRoutes = require('./src/routes/cliente.route');
const metodoPagoRoutes = require('./src/routes/metodopago.route');
const userRoutes = require('./src/routes/usuario.route');

const allRoutes = [
    { path: api+'/product', route: productRoutes },
    { path: api+'/orden', route: ordenRoutes },
    { path: api+'/cliente', route: clientRoutes },
    { path: api+'/metodopago', route: metodoPagoRoutes },
    { path: api+'/usuario', route: userRoutes }
  ];

  allRoutes.forEach(({ path, route }) => {
    app.use(`/api${path}`, route);
  });



app.listen(3000, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });


//const connection = require('./database/db');
sequelize.sync().then(() => {
    app.listen(3003, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });
});