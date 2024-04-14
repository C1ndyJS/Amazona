// models/Proveedor.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  contacto: {
    type: DataTypes.STRING
  },
  producto_id: {
    type: DataTypes.INTEGER
  },
  usuario_id: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'proveedor', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

module.exports = Proveedor;
