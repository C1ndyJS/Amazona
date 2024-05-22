const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class MetodoPago extends Model {}

MetodoPago.init({
  id_metodoPago: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  tipoPago: {
    type: DataTypes.INTEGER
  },
  numero: {
    type: DataTypes.INTEGER
  },
  cv: {
    type: DataTypes.INTEGER
  },
  fechaExpiracion: {
    type: DataTypes.DATE
  },
  codigoTarjetaRegalo: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: 'metodoPago', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(MetodoPago === sequelize.models.MetodoPago);

module.exports = MetodoPago;
