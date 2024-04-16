const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Ciudad extends Model {}

Ciudad.init({
  id_ciudad: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  pais_id: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize,
  tableName: 'ciudad', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Ciudad === sequelize.models.Ciudad);

module.exports = Ciudad;
