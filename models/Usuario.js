// models/Usuario.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Usuario = sequelize.define('Usuario', {
  id: {
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
  ciudad_id: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'usuario', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});
console.log(Usuario=== sequelize.models.Usuario);

module.exports = Usuario;
