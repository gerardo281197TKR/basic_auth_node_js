    const LoginDataValidate = (req, res, next) => {
        if(req.query.email){
            if (!isValidEmail(req.query.email)) {
            return res.status(400).json({
                status: false,
                status_code: 400,
                error: 'Please insert your email in correct format'
            });
            }else{
            next();
            }
        }else{
            return res.status(400).json({
            status: false,
            status_code: 400,
            error: 'Please insert your email'
            });
        }
        if (!req.query.password) {
            return res.status(400).json({
                status: false,
                status_code: 400,
                error: 'Please insert your password'
            });
        }
    };
  
    const isValidEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  
  module.exports = { LoginDataValidate };
  