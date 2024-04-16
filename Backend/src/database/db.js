const { Sequelize } = require('sequelize');
const {config} = require('dotenv');
const api = process.env.host;
require('dotenv/config')

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

