const express = require('express');
const router = express.Router();
const api = process.env.API_URL;

const MetodoPago = require('../models/MetodoPago');

router.get(`/metodopagos`, async (req, res) => {
    try {
        const metodopagos = await MetodoPago.findAll();
        res.status(200).json(metodopagos);
    } catch (error) {
        console.error('Error al obtener los metodos de pago:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post(`/metodopagos`, async (req, res) => {
    try {
        const nuevoMetodoPago = await MetodoPago.create(req.body);
        res.status(200).json(nuevoMetodoPago);
    } catch (error) {
        console.error('Error al crear un nuevo metodo de pago:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
 
router.put(`/metodopagos/:id`, async (req, res) => {
    try {
        const {id} = req.params;
        const metodopago = await MetodoPago.update(req.body, {where: {id_metodo_pago: id}});
        res.status(200).json(metodopago);
    }catch (error) {
        console.error('Error al actualizar el metodo de pago:', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
});

router.delete(`/metodopagos/:id`, async (req, res) => {
    try {
        const {id} = req.params;
        await MetodoPago.destroy({where: {id_metodo_pago: id}});
        res.status(200).json({message: `Metodo de pago con id ${id} eliminado`});
    }catch (error) {
        console.error('Error al eliminar el metodo de pago:', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
});

router.get(`/metodopagos/usuario/:id`, async (req, res) => {
    try {
        const {id} = req.params;
        const metodopagos = await MetodoPago.findAll({where: {usuario_id: id}});
        res.status(200).json(metodopagos);
    }catch (error) {
        console.error('Error al obtener los metodos de pago del usuario:', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
});




module.exports = router;