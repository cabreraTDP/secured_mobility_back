const mongoose = require('mongoose');
const IncidenteSchema = require('./Schemas/IncidenteSchema');

module.exports = Incidente = mongoose.model('incidente', IncidenteSchema)