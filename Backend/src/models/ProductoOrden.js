const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class ProductoOrden extends Model {}

ProductoOrden.init({
  id_productoOrden: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  cantidad: {
    type: DataTypes.INTEGER
  },
  opcion: {
    type: DataTypes.STRING
  },
  producto_id: {
    type: DataTypes.INTEGER
  },
  orden_id: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: 'productoOrden', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(ProductoOrden === sequelize.models.ProductoOrden);

module.exports = ProductoOrden;
