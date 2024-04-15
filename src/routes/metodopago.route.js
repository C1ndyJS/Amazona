const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const MetodoPago = require('../models/MetodoPago');

router.get(`${api}/metodopagos`, async (req, res) => {
    try {
        const metodopagos = await MetodoPago.findAll();
        res.json(metodopagos);
    } catch (error) {
        console.error('Error al obtener los metodos de pago:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post(`${api}/metodopagos`, async (req, res) => {
    try {
        const nuevoMetodoPago = await MetodoPago.create(req.body);
        res.json(nuevoMetodoPago);
    } catch (error) {
        console.error('Error al crear un nuevo metodo de pago:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
);
