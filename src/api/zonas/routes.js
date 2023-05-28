const express = require('express');
const router = express.Router();
const {crearZona, consultarZona } = require('./functions');

router.post('/crear', crearZona);
router.post('/consultar', consultarZona);


module.exports = router;