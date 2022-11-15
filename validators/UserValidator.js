const userDataValidate = (req, res, next) => {
  if (!req.body.nombre) {
      return res.status(400).json({
        status: false,
        status_code: 400,
        error: 'Please insert your user name'
      });
  }
  if (!req.body.apellido_p) {
      return res.status(400).json({
        status: false,
        status_code: 400,
        error: 'Please insert your firstname'
      });
  }
  if (!req.body.apellido_m) {
      return res.status(400).json({
        status: false,
        status_code: 400,
        error: 'Please insert your lastname'
      });
  }
  if(req.body.correo){
    if (!isValidEmail(req.body.correo)) {
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
};

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

module.exports = { userDataValidate };
