const Joi = require('joi');
const validation = require('./validation');

function validationCheckHandler(req, res, next, result) {
  if (result.error) {
    res.statusCode = 400;
    // console.log(result.error);

    return res.send({
      error: result.error,
      body: req.body,
      message: "Your request doesn't have valid parameters.",
    });
  }
  return next();
}

const loginCheck = (req, res, next) => {
  // validating request parameters
  const result = Joi.validate(req.body, validation.loginSchema);
  // handling response
  validationCheckHandler(req, res, next, result);
};
module.exports = {
  loginCheck,
};
