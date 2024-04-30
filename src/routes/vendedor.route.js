// const express = require('express');
// const router = express.Router();
// const api = process.env.API_URL;

// const Vendedor = require('../models/Vendedor');

// //PROBADO CON POSTMAN - FUNCIONA - OBTENER VENDEDORES
// router.get(`/vendedores`, async (req, res) => {
//     try {
//         const vendedores = await Vendedor.findAll();
//         res.status(200).json(vendedores);
//     } catch (error) {
//         console.error('Error al obtener los vendedores:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }});

// //PROBADO CON POSTMAN - FUNCIONA - CREAR VENDEDOR
// router.post(`/vendedor`, async (req, res) => {
//     try {
//         const nuevoVendedor = await Vendedor.create(req.body);
//         res.status(200).json(nuevoVendedor);
//     } catch (error) {
//         console.error('Error al crear un nuevo vendedor:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } }
// );

// //PROBADO CON POSTMAN - FUNCIONA - ACTUALIZAR VENDEDOR
// router.put(`/vendedor/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const vendedor = await Vendedor.update(req.body, { where: { id_vendedor: id } });
//         res.status(200).json(vendedor);
//     } catch (error) {
//         console.error('Error al actualizar el vendedor:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });

// //PROBADO CON POSTMAN - FUNCIONA - BORRAR VENDEDOR
// router.delete(`/vendedor/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Vendedor.destroy({ where: { id_vendedor: id } });
//         res.status(200).json({ message: `Vendedor con id ${id} eliminado` });
//     } catch (error) {
//         console.error('Error al eliminar el vendedor:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } }
// );

// //PROBADO CON POSTMAN - FUNCIONA - BUSCAR VENDEDOR POR ID
// router.get(`/vendedor/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const vendedor = await Vendedor.findOne({ where: { id_vendedor: id } });
//         res.status(200).json(vendedor);
//     } catch (error) {
//         console.error('Error al obtener el vendedor:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });


// //PROBADO CON POSTMAN - FUNCIONA - BUSCAR VENDEDOR POR USUARIO ID
// router.get(`/vendedor/usuario/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const vendedor = await Vendedor.findAll({ where: { usuario_id: id } });
//         res.status(200).json(vendedor);
//     } catch (error) {
//         console.error('Error al obtener el vendedor:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });

// module.exports = router;