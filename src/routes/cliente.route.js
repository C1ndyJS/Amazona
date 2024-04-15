const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Cliente = require('../models/Cliente');

router.get(`${api}/clientes`, async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post(`${api}/clientes`, async (req, res) => {
    try {
        const nuevoCliente = await Cliente.create(req.body);
        res.json(nuevoCliente);
    } catch (error) {
        console.error('Error al crear un nuevo cliente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
