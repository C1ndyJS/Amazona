const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Orden = require('../models/Orden');

router.get(`/ordenes`, async (req, res) => {
    try {
        const ordenes = await Orden.findAll();
        res.status(200).json(ordenes);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }});

router.post(`/ordenes`, async (req, res) => {
    try {
        const nuevaOrden = await Orden.create(req.body);
        res.status(200).json(nuevaOrden);
    } catch (error) {
        console.error('Error al crear una nueva orden:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

router.put(`/ordenes/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const orden = await Orden.update(req.body, { where: { id_orden: id } });
        res.status(200).json(orden);
    } catch (error) {
        console.error('Error al actualizar la orden:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

router.delete(`/ordenes/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Orden.destroy({ where: { id_orden: id } });
        res.status(200).json({ message: `Orden con id ${id} eliminada` });
    } catch (error) {
        console.error('Error al eliminar la orden:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

router.get(`/ordenes/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const orden = await Orden.findOne({ where: { id_orden: id } });
        res.status(200).json(orden);
    } catch (error) {
        console.error('Error al obtener la orden:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

router.get(`/ordenes/usuario/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const ordenes = await Orden.findAll({ where: { usuario_id: id } });
        res.status(200).json(ordenes);
    } catch (error) {
        console.error('Error al obtener las ordenes:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

// router.get(`/ordenes/estado/:estado`, async (req, res) => {
//     try {
//         const { estado } = req.params;
//         const ordenes = await Orden.findAll({ where: { estado: estado } });
//         res.status(200).json(ordenes);
//     } catch (error) {
//         console.error('Error al obtener las ordenes:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });


module.exports = router;
