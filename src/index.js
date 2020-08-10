const express   = require('express');
const cors      = require('cors');
const morgan    = require('morgan');
const router    = require('./routes');

// Definiendo puerto
const PORT = process.env.PORT || 3000;

const app = express();

// Databases
require('./app/database');

app.use( morgan('dev') );
app.use( cors() );
app.use( express.json() );

// importing routing
app.use('/api/v1', router);


const server = app.listen( PORT, () => {
    console.log(`Servicdor inicializado...`);
});


module.exports = server;