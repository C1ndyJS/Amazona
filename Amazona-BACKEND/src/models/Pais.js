const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Pais extends Model {}

Pais.init({
  id_pais: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'pais', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Pais === sequelize.models.Pais);

module.exports = Pais;