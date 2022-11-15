const {sequelize, User} = require('../../models');

const index = async (req, res) => {
	res.json({
		'status':false,
		'code':401,
		'message':'This route is from testing'
	})
}

/*const users = async(req, res) => {
  const response = await User.findAll()
  .then(function(data){
    const res = { 
        status: true, 
        status_code: 200, 
        users: data,
        menssage: null 
    }
    return res;
  })
  .catch(error =>{
    if(process.env.PROJECT_ENV == 'production'){
        const res = {
            status: false,
            status_code: 500,
            menssage: 'Error al obtener usuarios'
        }
        return res;
    }else{
        const res = { 
            status: false, 
            status_code: 500,
            menssage: error
        }
        return res;
    }
  })
  res.json(response);
}

const new_user = async(req,res) => {

    try {
        const search_email = await User.findAll({
            where:{
                email:req.body.correo,
            }
        }).then(function(usuario){
            if(usuario.length > 0){

                return res.status(400).json({
                    status: true,
                    status_code: 400,
                    mesagge: 'El usuario ya existe'
                }); 
            }
        });

        const response_new_user = await User.create({
            nombre: req.body.nombre,
            apellidoP:req.body.apellido_p,
            apellidoM:req.body.apellido_m,
            email:req.body.correo
        }).then(function(data){
            return res.status(200).json({
                status: true,
                status_code: 200,
                mesagge: 'User stored successfully'
            });
        }).catch(error => {
            return res.status(500).json({
                status: false,
                status_code: 500,
                error: error
            });
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            status_code: 500,
            error: error
        });
    }
};
*/

module.exports = {
    index
};