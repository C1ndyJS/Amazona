const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Carrito extends Model {}

Carrito.init({
  id_carrito: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_producto: {
    type: DataTypes.INTEGER
  },
  cantidad: {
    type: DataTypes.INTEGER
  },
  opcion: {
    type: DataTypes.STRING
  },
  fechaActualizacion: {
    type: DataTypes.DATE
  },
  subtotal: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: 'carrito', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Carrito === sequelize.models.Carrito);

module.exports = Carrito;
