const {config} = require('dotenv');
const express = require('express');
const sequelize = require('./src/database/db'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());



//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.set('port', 3003);

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
app.use(api, require('./src/routes/proveedor.route'));
app.use(api, require('./src/routes/carrito.route'));
app.use(api, require('./src/routes/categoria.route'));
app.use(api, require('./src/routes/ciudad.route'));
app.use(api, require('./src/routes/pais.route'));
app.use(api, require('./src/routes/productoorden.route'));
app.use(api, require('./src/routes/valoracion.route'));
app.use(api, require('./src/routes/vendedor.route'))
app.use(api, require('./src/routes/login.route'))

//const connection = require('./database/db');
sequelize.sync().then(() => {
    app.listen(app.get('port'), () => {
        console.log('Servidor corriendo en el puerto: ', app.get('port'));
    });
});