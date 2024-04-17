const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const Categoria = require('../models/Categoria');

//PROBADO CON POSTMAN - FUNCIONA - VER TODAS LAS CATEGORIAS
router.get(`/categorias`, async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        console.error('Error al obtener las Categorias:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }});

//PROBADO CON POSTMAN - FUNCIONA - CREAR NUEVA CATEGORIA
router.post(`/categoria`, async (req, res) => {
    try {
        const nuevaCategoria = await Categoria.create(req.body);
        res.status(200).json(nuevaCategoria);
    } catch (error) {
        console.error('Error al crear una nueva categoria:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

//PROBADO CON POSTMAN - FUNCIONA
router.put(`/categoria/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.update(req.body, { where: { id_categoria: id } });
        res.status(200).json(categoria);
    } catch (error) {
        console.error('Error al actualizar la categoria:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });

router.delete(`/categoria/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        await Categoria.destroy({ where: { id_categoria: id } });
        res.status(200).json({ message: `Categoria con id ${id} eliminada` });
    } catch (error) {
        console.error('Error al la categoria:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } }
);

//PROBADO CON POSTMAN - FUNCIONA VER POR CATEGORIA
router.get(`/categoria/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findOne({ where: { id_categoria: id } });
        res.status(200).json(categoria);
    } catch (error) {
        console.error('Error al obtener la categoria:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } });


module.exports = router;