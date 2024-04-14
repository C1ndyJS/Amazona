// models/Orden.js

const { DataTypes } = require('sequelize');
const sequelize = require('./src/database/db');

const Orden = sequelize.define('Orden', {
  id_orden: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.INTEGER
  },
  id_metodoPago: {
    type: DataTypes.INTEGER
  },
  fechaCreacion: {
    type: DataTypes.DATE
  },
  estado: {
    type: DataTypes.BOOLEAN
  },
  total: {
    type: DataTypes.BIGINT
  },
  direccionEnvio: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'orden', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

module.exports = Orden;
