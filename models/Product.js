const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Producto extends Model {}

Producto.init({
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
  sequelize,
  tableName: 'producto', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Producto === sequelize.models.Producto);

module.exports = { Producto };
