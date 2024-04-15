const express = require('express');
const router = express.Router();
const Proveedor = require('../models/Proveedor');

router.get(`/proveedores`, async (req, res) => {
    try {
        const proveedores = await Proveedor.findAll();
        res.json(proveedores);
    } catch (error) {
        console.error('Error al obtener los proveedores:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
);

router.post(`/proveedores`, async (req, res) => {
    try {
        const nuevoProveedor = await Proveedor.create(req.body);
        res.json(nuevoProveedor);
    } catch (error) {
        console.error('Error al crear un nuevo proveedor:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
