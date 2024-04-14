// models/Cliente.js

const {DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Cliente = sequelize.define(
  
  'Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'cliente', // Nombre de la tabla en la base de datos
  timestamps: false // Si no tienes timestamps en tu tabla
});

console.log(Cliente === sequelize.models.Cliente);

module.exports = Cliente;
