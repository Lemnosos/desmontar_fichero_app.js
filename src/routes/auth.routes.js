const express = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth.controllers');
const { validarToken } = require('../middlewares/validateTokens');


const router = express.Router();

router.post('/new', createUser)

router.post('/', loginUser)

router.get('/renew', validarToken, renewToken)

module.exports = router