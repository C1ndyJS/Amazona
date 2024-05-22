const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Producto = require('../models/Producto');

//Funciona Ver todos los productos =========================

router.get(`/productos`, async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

//Funciona Crear un producto =======================================

router.post(`/producto`, async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.status(200).json(nuevoProducto);
    } catch (error) {
        console.error('Error al crear un nuevo producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

// Funciona Modificar(Actualizar) por id ===========================

router.put(`/productos/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.update(req.body, { where: { id_producto: id } });
        res.status(200).json(producto);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

// Funciona Eliminar por id ============================================

router.delete(`/productos/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Producto.destroy({ where: { id_producto: id } });
        res.status(200).json({ message: `Producto con id ${id} eliminado` });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

// Funciona Ver por id ===============================================

router.get(`/productos/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findOne({ where: { id_producto: id } });
        res.status(200).json(producto);
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

// Funciona Ver por categoria ========================================

router.get(`/productos/categoria/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const productos = await Producto.findAll({ where: { categoria_id: id } });
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

// Funciona Ver por marca ============================================

router.get(`/productos/marca/:marca`, async (req, res) => {
    try {
        const { marca } = req.params;
        const productos = await Producto.findAll({ where: { marca: marca } });
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }

);

router.get(`/productos/precio/:min/:max`, async (req, res) => {
    try {
        const { min, max } = req.params;
        const productos = await Producto.findAll({ where: { precio: { [Op.between]: [min, max] } } });
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

router.get(`/productos/stock/:min/:max`, async (req, res) => {
    try {
        const { min, max } = req.params;
        const productos = await Producto.findAll({ where: { stock: { [Op.between]: [min, max] } } });
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

router.get(`/productos/stock/:min`, async (req, res) => {
    try {
        const { min } = req.params;
        const productos = await Producto.findAll({ where: { stock: { [Op.gte]: min } } });
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

router.get(`/productos/stock/:max`, async (req, res) => {
    try {
        const { max } = req.params;
        const productos = await Producto.findAll({ where: { stock: { [Op.lte]: max } } });
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);


module.exports = router;