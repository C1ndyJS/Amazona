const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Orden extends Model {}

Orden.init({
  id_orden: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.INTEGER
  },
  id_metodoPago: {
    type: DataTypes.INTEGER
  },
  fechaCreacion: {
    type: DataTypes.DATE
  },
  estado: {
    type: DataTypes.BOOLEAN
  },
  total: {
    type: DataTypes.BIGINT
  },
  direccionEnvio: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'orden', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Orden === sequelize.models.Orden);

module.exports = Orden;

