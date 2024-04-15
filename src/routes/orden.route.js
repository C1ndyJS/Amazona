const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Orden = require('../models/Orden');

router.get(`/ordenes`, async (req, res) => {
    try {
        const ordenes = await Orden.findAll();
        res.json(ordenes);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }});

router.post(`/ordenes`, async (req, res) => {
    try {
        const nuevaOrden = await Orden.create(req.body);
        res.json(nuevaOrden);
    } catch (error) {
        console.error('Error al crear una nueva orden:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

module.exports = router;
