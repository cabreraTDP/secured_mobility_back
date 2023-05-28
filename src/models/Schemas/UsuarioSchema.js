const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    incidentes: [
        {
            incidente: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'incidente'
            },
        }
    ],
    ranking: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = UsuarioSchema;