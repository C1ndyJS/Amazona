const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Cliente extends Model {}

Cliente.init({
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: 'cliente', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Cliente === sequelize.models.Cliente);

module.exports = Cliente;
