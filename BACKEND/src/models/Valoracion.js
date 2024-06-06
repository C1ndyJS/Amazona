const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Valoracion extends Model {}

Valoracion.init({
  id_valoracion: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  puntuacion: {
    type: DataTypes.INTEGER
  },
  comentario: {
    type: DataTypes.STRING
  },
  id_producto: {
    type: DataTypes.INTEGER
  },
  fecha: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  tableName: 'valoracion', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Valoracion === sequelize.models.Valoracion);

module.exports = Valoracion;
