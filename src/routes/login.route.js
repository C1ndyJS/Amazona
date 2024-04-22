const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Importa el paquete jsonwebtoken
const Usuario = require('../models/Usuario');

// Función de manejo de errores
const handleError = (res, error) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
};

// Ruta para la autenticación de usuario
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Verifica el nombre de usuario y la contraseña en la base de datos
        const usuario = await Usuario.findOne({ where: { correo: username, contrasena: password } });
        if (usuario) {
            // Si las credenciales son correctas, genera un token JWT con la información del usuario
            const token = jwt.sign({ 
                id_usuario: usuario.id_usuario,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                correo: usuario.correo,
                direccion: usuario.direccion,
                telefono: usuario.telefono,
                id_ciudad: usuario.id_ciudad
            }, 'secreto', { expiresIn: '1h' }); // Cambia 'secreto' por tu propia clave secreta
            // Devuelve el token en la respuesta
            res.status(200).json({ token });
        } else {
            // Si las credenciales son incorrectas, devuelve un mensaje de error
            res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
        }
    } catch (error) {
        // Maneja cualquier error que ocurra durante el proceso de autenticación
        handleError(res, error);
    }
});

// Otras rutas CRUD para productos
// ...

// Ruta predeterminada para manejar solicitudes a rutas no definidas
router.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = router;
