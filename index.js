import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//const express = require('express');
//const morgan = require('morgan');
//const cors = require('cors');
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';

//Conexion a la base de datos MongoDB
mongoose.Promise = global.Promise;
//const dbUrl = 'mongodb://127.0.0.1:27017/dbsistema';
const dbUrl = 'mongodb+srv://jesusromerojrv:lsNmsWAY91mLItFW@sistemait.ylet8gw.mongodb.net/bdsistema?retryWrites=true&w=majority';
mongoose.connect(dbUrl)
.then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
.catch(err => console.log(err));
const app = express();

//MIDDLEWARES
//son funciones que se ejecutan antes de que lleguen a las rutas

//Morgan
//Es un modulo que permite ver por consola las peticiones que vienen desde el navegador o aplicaciones cliente
app.use(morgan('dev'));
//Cors
//Se va utilizar para permitir que se realicen peticiones a nuestro servidor desde otras computadoras,
//es decir, remotas (no desde la misma pc, si no de diferentes)
app.use(cors());
//Express
//Se habilita al backenda para que pueda recibir peticiones json desde el metodo POST
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', router);

//Guarda en la variable port el puerto asignado por el servidor,
//si no hay algun puerto asignado, se tomara el puerto 3000
app.set('port', process.env.PORT || 3000);

//.listen() sirve para poder escuchar el puerto donde se va a ejecutar la app dentro del servidor
//lo que se esncuentra dentro de listen() es lo que se ejecutara cuando se conecte al servidor
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});