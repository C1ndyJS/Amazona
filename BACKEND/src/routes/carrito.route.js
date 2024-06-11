const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Carrito = require('../models/Carrito');

router.get(`/carrito`, async (req, res) => {
    try {
        const carritos = await Carrito.findAll();
        res.status(200).json(carritos);
    } catch (error) {
        console.error('Error al obtener el Carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }});

router.post(`/carrito`, async (req, res) => {
    try {
        const nuevoCarrito = await Carrito.create(req.body);
        res.status(200).json(nuevoCarrito);
    } catch (error) {
        console.error('Error al crear un nuevo carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

router.put(`/carrito/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const carrito = await Carrito.update(req.body, { where: { id_carrito: id } });
        res.status(200).json(carrito);
    } catch (error) {
        console.error('Error al actualizar el carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

router.delete(`/carrito/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Carrito.destroy({ where: { id_carrito: id } });
        res.status(200).json({ message: `Carrito con id ${id} eliminado` });
    } catch (error) {
        console.error('Error al eliminar el carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

router.get(`/carrito/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const carrito = await Carrito.findOne({ where: { id_carrito: id } });
        res.status(200).json(carrito);
    } catch (error) {
        console.error('Error al obtener el carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });


module.exports = router;