const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Cliente = require('../models/Cliente');

//PROBADO CON POSTMAN - FUNCIONA - OBTENER CLIENTES
router.get(`/clientes`, async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//PROBADO CON POSTMAN - FUNCIONA - CREAR CLIENTE
router.post(`/clientes`, async (req, res) => {
    try {
        const nuevoCliente = await Cliente.create(req.body);
        res.json(nuevoCliente);
    } catch (error) {
        console.error('Error al crear un nuevo cliente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//PROBADO CON POSTMAN - FUNCIONA - ACTUALIZAR CLIENTE
router.put(`/clientes/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.update(req.body, { where: { id_cliente: id } });
        res.json(cliente);
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//PROBADO CON POSTMAN - FUNCIONA - BORRAR CLIENTE
router.delete(`/clientes/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Cliente.destroy({ where: { id_cliente: id } });
        res.json({ message: `Cliente con id ${id} eliminado` });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//PROBADO CON POSTMAN - FUNCIONA - BUSCAR CLIENTE POR ID
router.get(`/clientes/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findOne({ where: { id_cliente: id } });
        res.json(cliente);
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//PROBADO CON POSTMAN - FUNCIONA - BUSCAR CLIENTE POR ID DE USUARIO
router.get(`/clientes/usuario/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const clientes = await Cliente.findAll({ where: { usuario_id: id } });
        res.json(clientes);
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});




module.exports = router;