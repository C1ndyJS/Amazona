const { Sequelize } = require('sequelize');
const {config} = require('dotenv');
const api = process.env.host;
require('dotenv/config')

//API_URL = /api/
//DB_HOST = localhost
//DB_USER = root
//DB_PASS =
//DB_DATABASE = amazona-db

//MYSQL_HOST=bofw568bn7fz0r9222jf-mysql.services.clever-cloud.com
//MYSQL_DB=bofw568bn7fz0r9222jf
//<MYSQL_USER=u41e0haegfc0fixl
//MYSQL_PORT=21296
//MYSQL_PASSWORD=HeLOR5M1R4Qyz9A6wCB
//MYSQL_URI=mysql://u41e0haegfc0fixl:HeLOR5M1R4Qyz9A6wCB@bofw568bn7fz0r9222jf-mysql.services.clever-cloud.com:21296/bofw568bn7fz0r9222jf

// Obtener las credenciales de las variables de entorno
const { MYSQL_HOST, MYSQL_DB, MYSQL_USER, MYSQL_PORT, MYSQL_PASSWORD } = process.env;

// Construir la URL de conexión
const dbUrl = `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}`;

// Configurar la instancia de Sequelize
const sequelize = new Sequelize(dbUrl, {
  dialect: 'mysql',
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectToDatabase();

module.exports = sequelize;

