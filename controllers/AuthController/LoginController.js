const {sequelize, User} = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const moment = require('moment');
dotenv.config();

const login = async (req, res) => {
	let email_user = req.query.email;
	let passw_user = req.query.password;
	const user = await User.findOne({
		where:{
			email: email_user,
		} 
	}).then(function(user){
		if(user == null){
			res.json({
				'status':true,
				'code':404,
				'message':'User not found',
			})
		}else{
			const unhash = bcrypt.compareSync(passw_user, user.password);
			if(unhash == true){
				let now = moment.now()
				const token = jwt.sign({'user_id':user.id,'expires_in_date':now}, process.env.PROJECT_TOKEN_SECRET, { expiresIn: '1h' });
				const update_user = User.update({
						token:token
					},
					{
						where:{
							id:user.id
						}
					}).then(function(update_user){
					return res.status(200).json({
						'status': true,
						'code': 200,
						'mesagge': 'User login successfully',
						'token': token
					});
				}).catch(error => {
					return res.status(500).json({
						'status': false,
						'code': 500,
						'mesagge': 'Error update user'
					});
				});
			}else{
				res.json({
					'status':true,
					'code':419,
					'message':'User or password not allowed'
				})
			}
		}
	}).catch(function(err){
		console.log(err)
		res.json({
			'status':false,
			'code':500,
			'message':'Error in database'
		})
	});
}

module.exports = {
    login
};