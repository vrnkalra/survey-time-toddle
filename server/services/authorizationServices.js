const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

function createJWT(data, res) {
  const token = jwt.sign(data, secretKey, { expiresIn: '1h' });

  return res.status(200).send({
    message: 'Success',
    data: {
      access_token: token,
    },
    error: null,
  });
}

function checkJWT(req, res, next) {
  const token = req.headers.authorization || req.cookies.authorization;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (!err) {
      req.user_id = decoded.id;
      return next();
    }

    return res
      .status(500)
      .send({ error: 'Invalid_token', message: err.message });
  });
}

module.exports = { createJWT, checkJWT };
