const mongoose = require('mongoose');
const UsuarioSchema = require('./Schemas/UsuarioSchema');

module.exports = Usuario = mongoose.model('usuario', UsuarioSchema)