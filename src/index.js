//configuraciones
require("./config/config");
const conexion=require("./config/database");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }))


// parse application/json
app.use(bodyParser.json());


conexion.connect().then(resp => {
    console.log('--------------------------------')
    console.log('CONEXION A POSTGRES ESTABLECIDA');
})


app.listen(process.env.PORT, () => {
    console.log("AMBIENTE:    " + process.env.AMBIENTE);
    console.log("URL NODE:     http://localhost:" + process.env.PORT);
    console.log("URL Postgres:   " + process.env.urlPostgres);
  });