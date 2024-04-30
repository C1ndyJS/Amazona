const express = require('express');
const router = express.Router();
const api = process.env.API_URL;
const bcrypt = require('bcrypt'); // Importar bcrypt para comparar contraseñas


// Importar el modelo de Usuario
const Usuario = require('../models/Usuario');

// Endpoint para obtener todos los usuarios
router.get(`/usuarios`, async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para crear un nuevo usuario
router.post(`/usuarios`, async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.json(nuevoUsuario);
    } catch (error) {
        console.error('Error al crear un nuevo usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para actualizar un usuario existente por su ID
router.put(`/usuarios/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.update(req.body, { where: { correo: id } });
        res.json(usuario);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para actualizar un usuario existente por su correo electrónico
router.put(`/usuarios/email/:email`, async (req, res) => {
    try {
        const { email } = req.params;
        const usuario = await Usuario.update(req.body, { where: { correo: email } });
        res.json(usuario);
    } catch (error) {
        console.error('Error al actualizar el usuario por correo electrónico:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


// Endpoint para que un usuario actualice su perfil proporcionando correo y contraseña
router.put(`/usuarios/profile`, async (req, res) => {
    try {
        const { correo, contraseña, nuevoPerfil } = req.body;

        // Buscar el usuario por correo electrónico
        const usuario = await Usuario.findOne({ where: { correo } });

        // Verificar si el usuario existe
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
        const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);

        // Verificar si la contraseña es válida
        if (!contraseñaValida) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        // Actualizar el perfil del usuario
        await Usuario.update(nuevoPerfil, { where: { correo } });

        // Obtener el perfil actualizado del usuario
        const perfilActualizado = await Usuario.findOne({ where: { correo } });

        // Enviar la respuesta con el perfil actualizado
        res.json({ mensaje: 'Perfil actualizado correctamente', perfil: perfilActualizado });

    } catch (error) {
        console.error('Error al actualizar el perfil del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});







// Endpoint para eliminar un usuario por su ID
router.delete(`/usuarios/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Usuario.destroy({ where: { id_usuario: id } });
        res.json({ message: `Usuario con id ${id} eliminado` });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para obtener un usuario por su ID
router.get(`/usuarios/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findOne({ where: { id_usuario: id } });
        res.json(usuario);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Endpoint para obtener usuarios por su rol
router.get(`/usuarios/rol/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const usuarios = await Usuario.findAll({ where: { rol_id: id } });
        res.json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios del rol:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Exportar el router para su uso en otras partes de la aplicación
module.exports = router;
