const mongoose = require('mongoose');
const ZonaSchema = require('./Schemas/ZonaSchema');

module.exports = Zona = mongoose.model('zona', ZonaSchema)