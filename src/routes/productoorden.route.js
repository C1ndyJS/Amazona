// const express = require('express');
// const router = express.Router();
// const api = process.env.API_URL;

// const ProductoOrden = require('../models/ProductoOrden');

// //PROBADO CON POSTMAN - FUNCIONA - OBTENER PRODUCTOS DE ORDEN
// router.get(`/productoorden`, async (req, res) => {
//     try {
//         const productoordenes = await ProductoOrden.findAll();
//         res.status(200).json(productoordenes);
//     } catch (error) {
//         console.error('Error al obtener los productos de la orden:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }});

// //PROBADO CON POSTMAN - FUNCIONA - CREAR NUEVO PRODUCTO ORDEN
// router.post(`/productoorden`, async (req, res) => {
//     try {
//         const nuevoProductoOrden = await ProductoOrden.create(req.body);
//         res.status(200).json(nuevoProductoOrden);
//     } catch (error) {
//         console.error('Error al crear un nuevo producto en la orden:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } }
// );

// //PROBADO CON POSTMAN - FUNCIONA - ACTUALIZAR PRODUCTO ORDEN
// router.put(`/productoorden/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const productoorden = await ProductoOrden.update(req.body, { where: { id_productoOrden: id } });
//         res.status(200).json(productoorden);
//     } catch (error) {
//         console.error('Error al actualizar el producto en la orden:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });

// //PROBADO CON POSTMAN - FUNCIONA - BORRAR PRODUCTO ORDEN
// router.delete(`/productoorden/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         await ProductoOrden.destroy({ where: { id_productoOrden: id } });
//         res.status(200).json({ message: `Producto con id ${id} ha sido eliminado de la orden` });
//     } catch (error) {
//         console.error('Error al eliminar el producto:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } }
// );

// //PROBADO CON POSTMAN - FUNCIONA - BUSCAR PRODUCTO ORDEN POR ID
// router.get(`/productoorden/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const productoorden = await ProductoOrden.findOne({ where: { id_productoOrden: id } });
//         res.status(200).json(productoorden);
//     } catch (error) {
//         console.error('Error al obtener el producto de la orden:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });


// //PROBADO CON POSTMAN - FUNCIONA - BUSCAR PRODUCTO ORDEN POR PRODUCTO ID
// router.get(`/productoorden/producto/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const productoorden = await ProductoOrden.findAll({ where: { producto_id: id } });
//         res.status(200).json(productoorden);
//     } catch (error) {
//         console.error('Error al obtener producto:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });


// //PROBADO CON POSTMAN - FUNCIONA - BUSCAR PRODUCTO ORDEN POR ORDEN ID
// router.get(`/productoorden/orden/:id`, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const productoorden = await ProductoOrden.findAll({ where: { orden_id: id } });
//         res.status(200).json(productoorden);
//     } catch (error) {
//         console.error('Error al obtener producto:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     } });


    
// module.exports = router;