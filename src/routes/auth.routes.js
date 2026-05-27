const express = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth.controllers')

const router = express.Router();

router.post('/new', createUser)

router.post('/', loginUser)

router.post('/renew', /*validateJSW, */ renewToken)

module.exports = router