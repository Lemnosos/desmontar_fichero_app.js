const express = require('express');
const { check } = require('express-validator');

const {
    traerTodosLosProductos,
    traerUnProductoPorId,
    crearUnProducto,
    actualizarUnProductoPorId,
    eliminarUnProductoPorId
} = require('../controllers/productos.controllers');

const validateInputs = require('../middlewares/validateImputs');

const router = express.Router();


// =======================
// GET ALL
// =======================
router.get('/', traerTodosLosProductos);


// =======================
// GET BY ID
// =======================
router.get(
    '/:id',
    [
        check('id')
            .isInt({ min: 1 })
            .withMessage('El id debe ser un número entero positivo'),
        validateInputs
    ],
    traerUnProductoPorId
);


// =======================
// CREATE PRODUCT
// =======================
router.post(
    '/crear',
    [
        check('nombre')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El nombre debe ser texto'),

        check('descripcion')
            .notEmpty().withMessage('La descripción es obligatoria')
            .isString().withMessage('La descripción debe ser texto'),

        check('precio')
            .notEmpty().withMessage('El precio es obligatorio')
            .isNumeric().withMessage('El precio debe ser un número')
            .custom(value => value > 0)
            .withMessage('El precio debe ser mayor que 0'),

        validateInputs
    ],
    crearUnProducto
);


// =======================
// UPDATE PRODUCT
// =======================
router.put(
    '/actualizar/:id',
    [
        check('id')
            .isInt({ min: 1 })
            .withMessage('El id debe ser un número entero positivo'),

        check('nombre')
            .optional()
            .isString().withMessage('El nombre debe ser texto'),

        check('descripcion')
            .optional()
            .isString().withMessage('La descripción debe ser texto'),

        check('precio')
            .optional()
            .isNumeric().withMessage('El precio debe ser un número')
            .custom(value => value > 0)
            .withMessage('El precio debe ser mayor que 0'),

        validateInputs
    ],
    actualizarUnProductoPorId
);


// =======================
// DELETE PRODUCT
// =======================
router.delete(
    '/eliminar/:id',
    [
        check('id')
            .isInt({ min: 1 })
            .withMessage('El id debe ser un número entero positivo'),

        validateInputs
    ],
    eliminarUnProductoPorId
);

module.exports = router;