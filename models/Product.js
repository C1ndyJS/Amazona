// models/Product.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./src/database/db');

const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.INTEGER
  },
  marca: {
    type: DataTypes.STRING
  },
  stock: {
    type: DataTypes.INTEGER
  },
  URL_imagen: {
    type: DataTypes.STRING
  },
  categoria_id: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'producto', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(User === sequelize.models.Producto);

module.exports = Producto;
