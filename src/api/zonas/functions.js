const { encryptPassword, matchPassword } = require('../../utils/crypt')
const mongoose = require('mongoose');
const { createJWT } = require('../../utils/jwt');
const Zona = require('../../models/Zona');

const crearZona = async(req, res) => {

    const {type, geometry, codigo_postal} = req.body;

    const newZona = new Zona({
        type,
        geometry,
        codigo_postal,
    });

    const zonaCreated = await newZona.save();


    res.status(200).json({
        zonaID: zonaCreated._id
    })
}

const consultarZona = async(req, res) => {
    const {location} = req.body;
    const location1 = {
        latitude: '25.732906547320635',
        longuitude: '-100.3013147053549'
    }
    console.log('location', location)
    try{
        const zonaGeografica = await Zona.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [ location.coords.longitude, location.coords.latitude ] } } } })
        //const zonaGeografica = await Zona.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [ location1.longuitude, location1.latitude ] } } } })

        if(zonaGeografica){

            return res.status(200).json({
                codigo_postal: zonaGeografica.properties.d_codigo,
                ranking: zonaGeografica.ranking,
                zona: zonaGeografica.geometry.coordinates
            })
        }else{
            console.log('no')
    
            return res.status(500).json({
                error: 'Zona no cubierta.' 
            });
        }
    }catch(e){
        console.log(e)
    }

    //const zonaGeografica = await Zona.find({properties: {d_codigo: '66450'}})
    
}

module.exports = {
    crearZona,
    consultarZona
}