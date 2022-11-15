// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var HomeController = require('../controllers/HomeControllers/HomeController');

//Validaciones para el usuario 
const { userDataValidate } = require("../validators/UserValidator");
const { ValidationToken } = require("../validators/auth/ValidationToken");
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/index', ValidationToken, HomeController.index);

// Exportamos la configuración
module.exports = api;
