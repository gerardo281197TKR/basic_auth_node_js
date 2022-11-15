const jwt = require('jsonwebtoken');
const moment = require('moment');
var now = moment().format('YYYY-MM-DD h:mm:ss');
const dotenv = require('dotenv');
dotenv.config();
const {sequelize, User} = require('../../models');

const ValidationToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.json({'status':true, 'code':401, 'message':'Not autorization'})
    jwt.verify(token, process.env.PROJECT_TOKEN_SECRET, (err,user) => {
      if(err){
        return res.json({'status':true, 'code':500, 'message':'Token not found'})
      }else{
        if(moment.now() < moment(user.expires_in_date).add(2,'hours')){
          const user_logged = User.findOne({
              where:{
                id: user.user_id,
              } 
            }).then(function(user_log){
              req.real_user = user_log
              next()
            }).catch(function(error){
              return res.json({'status':false, 'code':500, 'message':'Have a problem with your token'})
            });
        }else{
          return res.json({'status':true, 'code':401, 'message':'Token expired'})
        }
      }
    })
};

module.exports = { ValidationToken };
