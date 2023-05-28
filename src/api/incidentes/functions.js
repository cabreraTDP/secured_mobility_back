const { encryptPassword, matchPassword } = require('../../utils/crypt')
const Incidente = require('../../models/Incidente');
const mongoose = require('mongoose');
const { createJWT } = require('../../utils/jwt');
const Zona = require('../../models/Zona');

const crearIncidente = async(req, res) => {
    const {tipo, user, ubicacion} = req.body;

    let newIncidente = {}
    const zonaGeografica = await Zona.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [ ubicacion.coords.longitude, ubicacion.coords.latitude ] } } } })
    if(zonaGeografica){
        newIncidente = new Incidente({
            tipo: tipo,
            ranking: zonaGeografica.ranking + (tipo*user),
            ubicacion: {
                coordenadas: [ubicacion.coords.longitude, ubicacion.coords.latitude]
            },
            codigo_postal: zonaGeografica.properties.d_codigo,
        });
    }else{
        newIncidente = new Incidente({
            tipo: tipo,
            ranking: (tipo*user),
            ubicacion: {
                coordenadas: [ubicacion.coords.longitude, ubicacion.coords.latitude]
            },
            codigo_postal: '',
        });
    
    }

    const incidenteCreado = await newIncidente.save();
    updateZona = {
        ranking: zonaGeografica.ranking + (tipo*user)
    }
    await zonaGeografica.updateOne(updateZona);

    res.status(200).json({
        data: incidenteCreado._id
    })

};

const obtenerIncidentes = async(req, res) => {
    res.status(200).json({
        data: token
    })
}

module.exports = {
    crearIncidente,
    obtenerIncidentes
}