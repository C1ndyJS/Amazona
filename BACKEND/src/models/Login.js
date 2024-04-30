// En un archivo llamado Usuario.js en la carpeta models

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de tener configurada tu conexión a la base de datos en este archivo

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Usuario;
