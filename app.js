const {config} = require('dotenv');
const express = require('express');
const sequelize = require('./Backend/src/database/db'); 
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
app.use(api, require('./Backend/src/routes/product.route'));
app.use(api, require('./Backend/src/routes/orden.route'));
app.use(api, require('./Backend/src/routes/cliente.route'));
app.use(api, require('./Backend/src/routes/metodopago.route'));
app.use(api, require('./Backend/src/routes/orden.route'));
app.use(api, require('./Backend/src/routes/usuario.route'));
app.use(api, require('./Backend/src/routes/proveedor.route'));

app.use(api, require('./Backend/src/routes/carrito.route'));
app.use(api, require('./Backend/src/routes/categoria.route'));
app.use(api, require('./Backend/src/routes/ciudad.route'));
app.use(api, require('./Backend/src/routes/pais.route'));
app.use(api, require('./Backend/src/routes/productoorden.route'));
app.use(api, require('./Backend/src/routes/valoracion.route'));
app.use(api, require('./Backend/src/routes/vendedor.route'))


//const connection = require('./database/db');
sequelize.sync().then(() => {
    app.listen(3003, () => {
        console.log('Servidor corriendo en el puerto 300x');
    });
});