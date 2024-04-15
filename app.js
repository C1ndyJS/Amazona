const {config} = require('dotenv');
const express = require('express');
const sequelize = require('./src/database/db'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api = process.env.API_URL;

//Routes
//const routes = require('./src/routes');
//app.use(api, routes);
app.use(api, require('./src/routes/product.route'));
app.use(api, require('./src/routes/orden.route'));
app.use(api, require('./src/routes/cliente.route'));
app.use(api, require('./src/routes/metodopago.route'));
app.use(api, require('./src/routes/orden.route'));
app.use(api, require('./src/routes/usuario.route'));

app.listen(3000, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });


//const connection = require('./database/db');
sequelize.sync().then(() => {
    app.listen(3003, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });
});