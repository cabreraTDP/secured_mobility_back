const mongoose = require('mongoose');

const ZonaSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    geometry: {
        type: {
            type: String
        },
        coordinates: []
    },
    properties: {
        d_codigo: {
            type: String,
            requiired: true
        }
    },
    ranking: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

ZonaSchema.index({ geometry: '2dsphere' });

module.exports = ZonaSchema;

