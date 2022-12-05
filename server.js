const express = require('express');
const bodyParser= require('body-parser')
const app = express();

const dotenv = require('dotenv');
dotenv.config();
//console.log(`Your port is ${process.env.PROJECT_PORT}`); 

const cors = require('cors')
app.use(cors())

//`` alt derecho + C, arriba de shift derecho jaja 
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
	res.json({
		'status':false,
		'code':401,
		'message':'Acceso denegado'
	})
})

// Importamos las rutas de home
var api_routes_home = require('./routes/ApiRoutes');
var api_routes_auth = require('./routes/AuthRoutes');

// body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Cargamos las rutas home
app.use('/api/home', api_routes_home);
app.use('/api/auth', api_routes_auth);

app.get('*', function(req, res){
  res.json({
  	'status': false,
  	'code': 404,
  	'message': 'This route not exist'
  });
});

var port = process.env.PROJECT_PORT || 3000;
app.listen(port, function() {
  console.log(`listening on ${port}`)
})