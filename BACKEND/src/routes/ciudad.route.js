const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Ciudad = require('../models/Ciudad');

//PROBADO CON POSTMAN - FUNCIONA - OBTENER CIUDADES
router.get(`/ciudades`, async (req, res) => {
    try {
        const ciudades = await Ciudad.findAll();
        res.status(200).json(ciudades);
    } catch (error) {
        console.error('Error al obtener las ciudades:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }});

//PROBADO CON POSTMAN - FUNCIONA - CREAR NUEVA CIUDAD
router.post(`/ciudad`, async (req, res) => {
    try {
        const nuevaCiudad = await Ciudad.create(req.body);
        res.status(200).json(nuevaCiudad);
    } catch (error) {
        console.error('Error al crear una nueva ciudad:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

//PROBADO CON POSTMAN - FUNCIONA - ACTUALIZAR CIUDAD
router.put(`/ciudad/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const ciudad = await Ciudad.update(req.body, { where: { id_ciudad: id } });
        res.status(200).json(ciudad);
    } catch (error) {
        console.error('Error al actualizar la ciudad:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

//PROBADO CON POSTMAN - FUNCIONA - ELIMINAR CIUDAD
router.delete(`/ciudad/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Ciudad.destroy({ where: { id_ciudad: id } });
        res.status(200).json({ message: `Ciudad con id ${id} eliminada` });
    } catch (error) {
        console.error('Error al eliminar la ciudad:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

//PROBADO CON POSTMAN - FUNCIONA - BUSCAR CIUDAD POR ID
router.get(`/ciudad/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const ciudad = await Ciudad.findOne({ where: { id_ciudad: id } });
        res.status(200).json(ciudad);
    } catch (error) {
        console.error('Error al obtener la ciudad:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

//PROBADO CON POSTMAN - FUNCIONA - BUSCAR POR PAIS
router.get(`/ciudad/pais/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const ciudad = await Ciudad.findAll({ where: { pais_id: id } });
        res.status(200).json(ciudad);
    } catch (error) {
        console.error('Error al obtener la ciudad:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });


module.exports = router;