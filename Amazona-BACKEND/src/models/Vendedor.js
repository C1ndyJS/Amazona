const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Vendedor extends Model {}

Vendedor.init({
  id_vendedor: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: 'vendedor', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Vendedor === sequelize.models.Vendedor);

module.exports = Vendedor;
