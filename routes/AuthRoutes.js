// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var LoginController = require('../controllers/AuthController/LoginController');

//Validaciones para el usuario 
const { LoginDataValidate } = require("../validators/auth/LoginValidations");
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo POST para el método del login
api.post('/login',LoginDataValidate,LoginController.login);

// Exportamos la configuración
module.exports = api;
