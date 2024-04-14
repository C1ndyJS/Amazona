// models/MetodoPago.js

const { DataTypes } = require('sequelize');
const sequelize = require('./src/database/db');

const MetodoPago = sequelize.define('MetodoPago', {
  id_metodoPago: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  tipoPago: {
    type: DataTypes.INTEGER
  },
  numero: {
    type: DataTypes.INTEGER
  },
  cv: {
    type: DataTypes.INTEGER
  },
  fechaExpiracion: {
    type: DataTypes.DATE
  },
  codigoTarjetaRegalo: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'metodoPago', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

module.exports = MetodoPago;
