const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Usuario extends Model {}

Usuario.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  apellido: {
    type: DataTypes.STRING
  },
  correo: {
    type: DataTypes.STRING
  },
  contrasena: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  id_ciudad: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: 'usuario', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Usuario === sequelize.models.Usuario);

module.exports = Usuario;
