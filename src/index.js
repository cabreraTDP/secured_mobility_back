const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const corsOptions = {
    origin: '*'
}

require('dotenv').config('./');

const app = express();
const db = require('./utils/database');

const port = process.env.PORT || 7799;

app.unsubscribe(express.static('public'));
app.use(express.json({ extended: false}));
app.use(cookieParser());
app.use(cors());

//app.use('/incidentes', require('./api/incidentes/routes'))
app.use('/usuarios', require('./api/usuarios/routes'))
app.use('/zonas', require('./api/zonas/routes'))


db.connection().then(mongo => {
    app.listen(port, () => {
        console.log('Server started on port', port);
    })
}).catch(err => {
    console.error(err);
})
