const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Proveedor extends Model {}

Proveedor.init({
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  contacto: {
    type: DataTypes.STRING
  },
  producto_id: {
    type: DataTypes.INTEGER
  },
  usuario_id: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: 'proveedor', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Proveedor === sequelize.models.Proveedor);

module.exports = Proveedor;
