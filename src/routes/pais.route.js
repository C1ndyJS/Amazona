// const express = require('express');
// const router = express.Router();
// const api = process.env.API_URL;

// const Pais = require('../models/Pais');

// //PROBADO CON POSTMAN - FUNCIONA - OBTENER PAISES
// router.get(`/paises`, async (req, res) => {
//     try {
//         const paises = await Pais.findAll();
//         res.status(200).json(paises);
//     } catch (error) {
//         console.error('Error al obtener los paises:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }});

// //PROBADO CON POSTMAN - FUNCIONA - CREAR PAIS
// router.post(`/pais`, async (req, res) => {
//     try {
//         const nuevoPais = await Pais.create(req.body);
//         res.status(200).json(nuevoPais);
//     } catch (error) {
//         console.error('Error al crear una nuevo pais', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } }
// );

// //PROBADO CON POSTMAN - FUNCIONA - ACTUALIZAR PAIS
// router.put(`/pais/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const pais = await Pais.update(req.body, { where: { id_pais: id } });
//         res.status(200).json(pais);
//     } catch (error) {
//         console.error('Error al actualizar el pais:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });

// //PROBADO CON POSTMAN - FUNCIONA - ELIMINAR PAIS
// router.delete(`/pais/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Pais.destroy({ where: { id_pais: id } });
//         res.status(200).json({ message: `Pais con id ${id} eliminado` });
//     } catch (error) {
//         console.error('Error al eliminar el pais:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } }
// );

// //PROBADO CON POSTMAN - FUNCIONA - OBTENER PAIS POR ID
// router.get(`/pais/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const pais = await Pais.findOne({ where: { id_pais: id } });
//         res.status(200).json(pais);
//     } catch (error) {
//         console.error('Error al obtener el pais:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });

// module.exports = router;