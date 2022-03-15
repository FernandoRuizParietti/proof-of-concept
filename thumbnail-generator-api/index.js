const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/index');
const errorHandler = require('./src/utils/middleware/errorHandler');
const setHeaders = require('./src/utils/middleware/setHeaders');
const cors = require("cors");

const {PORT} = require('./src/utils/config/index');
const app = express();

//seteo mis headers

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(setHeaders);


//seteo mis rutas

app.use('/api',routes)

//middleware de control de errores

app.use(errorHandler);

//server.listen

app.listen(PORT, ()=>{
    console.log(`servidor eschuchando en port ${PORT}`)
})