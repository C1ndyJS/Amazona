const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Usuario = require('../models/Usuario');

router.get(`/usuarios`, async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

router.post(`/usuarios`, async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.json(nuevoUsuario);
    } catch (error) {
        console.error('Error al crear un nuevo usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });


router.put(`/usuarios/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.update(req.body, { where: { id_usuario: id } });
        res.json(usuario);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);


router.delete(`/usuarios/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Usuario.destroy({ where: { id_usuario: id } });
        res.json({ message: `Usuario con id ${id} eliminado` });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);


router.get(`/usuarios/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findOne({ where: { id_usuario: id } });
        res.json(usuario);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);


router.get(`/usuarios/rol/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const usuarios = await Usuario.findAll({ where: { rol_id: id } });
        res.json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios del rol:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);




module.exports = router;