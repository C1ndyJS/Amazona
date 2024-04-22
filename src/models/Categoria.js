const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Categoria extends Model {}

Categoria.init({
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'categoria', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Categoria === sequelize.models.Categoria);

module.exports = Categoria;
