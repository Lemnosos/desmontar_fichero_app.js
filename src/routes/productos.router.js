const express = require('express')
const { check } = require('express-validator')

const { traerTodosLosProductos, traerUnProductoPorId, crearUnProductos, actualizarUnProductoPorId, eliminarUnProductoPorId } = require('../controllers/productos.controllers')
const validateInputs = require('../middlewares/validateImputs')

const router = express.Router()


router.get('/', [], traerTodosLosProductos)

router.get('/:id', [], traerUnProductoPorId)

router.post('/crear', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatori').not().isEmpty(),
    check('categoria', 'La catagotia es obligatori').not().isEmpty(),
    validateInputs


], crearUnProductos)

router.put('/actualizar/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatori').not().isEmpty(),
    check('categoria', 'La catagotia es obligatori').not().isEmpty(),
    validateInputs

], actualizarUnProductoPorId)

router.delete('/eliminar/:id', eliminarUnProductoPorId)


module.exports = router