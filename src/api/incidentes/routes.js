const express = require('express');
const router = express.Router();
const {crearIncidente } = require('./functions');


router.post('/crear', crearIncidente);

module.exports = router;