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

router.put(`/proveedores/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const proveedor = await Proveedor.update(req.body, { where: { id_proveedor: id } });
        res.json(proveedor);
    } catch (error) {
        console.error('Error al actualizar el proveedor:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.delete(`/proveedores/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Proveedor.destroy({ where: { id_proveedor: id } });
        res.json({ message: `Proveedor con id ${id} eliminado` });
    } catch (error) {
        console.error('Error al eliminar el proveedor:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get(`/proveedores/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const proveedor = await Proveedor.findOne({ where: { id_proveedor: id } });
        res.json(proveedor);
    } catch (error) {
        console.error('Error al obtener el proveedor:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get(`/proveedores/producto/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const proveedores = await Proveedor.findAll({ where: { producto_id: id } });
        res.json(proveedores);
    } catch (error) {
        console.error('Error al obtener los proveedores del producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


router.get(`/proveedores/categoria/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const proveedores = await Proveedor.findAll({ where: { categoria_id: id } });
        res.json(proveedores);
    } catch (error) {
        console.error('Error al obtener los proveedores de la categoria:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


router.get(`/proveedores/marca/:marca`, async (req, res) => {
    try {
        const { marca } = req.params;
        const proveedores = await Proveedor.findAll({ where: { marca: marca } });
        res.json(proveedores);
    } catch (error) {
        console.error('Error al obtener los proveedores de la marca:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});



module.exports = router;
