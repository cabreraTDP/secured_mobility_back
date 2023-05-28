const mongoose = require('mongoose');

const IncidenteSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    ranking: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ubicacion: {
        tipo: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordenadas: {
            type: [Number],
            required: true
        }
    },
    codigo_postal: {
        type: String,
        requiired: true
    }
})

IncidenteSchema.index({ ubicacion: '2dsphere' });

module.exports = IncidenteSchema;