const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Valoracion = require('../models/Valoracion');

//PROBADO CON POSTMAN - FUNCIONA - OBTENER VALORACIONES
router.get(`/valoraciones`, async (req, res) => {
    try {
        const valoraciones = await Valoracion.findAll();
        res.status(200).json(valoraciones);
    } catch (error) {
        console.error('Error al obtener las valoraciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }});

//PROBADO CON POSTMAN - FUNCIONA - CREAAR VALORACION
router.post(`/valoracion`, async (req, res) => {
    try {
        const nuevaValoracion = await Valoracion.create(req.body);
        res.status(200).json(nuevaValoracion);
    } catch (error) {
        console.error('Error al crear una nueva Valoracion:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

//PROBADO CON POSTMAN - FUNCIONA - ACTUALIZAR VALORACION
router.put(`/valoracion/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const valoracion = await Valoracion.update(req.body, { where: { id_valoracion: id } });
        res.status(200).json(valoracion);
    } catch (error) {
        console.error('Error al actualizar la valoracion:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

//PROBADO CON POSTMAN - FUNCIONA - BORRAR VALORACION
router.delete(`/valoracion/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Valoracion.destroy({ where: { id_valoracion: id } });
        res.status(200).json({ message: `Valoracion con id ${id} eliminada` });
    } catch (error) {
        console.error('Error al eliminar la valoracion:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

//PROBADO CON POSTMAN - FUNCIONA - OBTENER VALORACION POR SU ID
router.get(`/valoracion/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const valoracion = await Valoracion.findOne({ where: { id_valoracion: id } });
        res.status(200).json(valoracion);
    } catch (error) {
        console.error('Error al obtener la valoracion:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

//PROBADO CON POSTMAN - FUNCIONA - OBTENER VALORACION POR ID DE PRODUCTO
router.get(`/valoracion/producto/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const valoracion = await Valoracion.findAll({ where: { producto_id: id } });
        res.status(200).json(valoracion);
    } catch (error) {
        console.error('Error al obtener la valoracion:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

module.exports = router;