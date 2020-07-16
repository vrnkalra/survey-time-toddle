const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

function createJWT(data, res) {
  const token = jwt.sign(data, secretKey, { expiresIn: 1800 });

  return res.status(200).send({
    message: 'Success',
    data: {
      access_token: `Bearer ${token}`,
    },
    error: null,
  });
}

function checkJWT(req, res, next) {
  const token = req.headers.token || req.cookies.token;
  jwt.verify(token, secretKey, (err, decoded) => {
    if (!err) {
      console.log(decoded);
      req.userId = decoded;
      return next();
    }

    return res
      .status(500)
      .send({ error: 'Invalid_token', message: err.message });
  });
}

module.exports = { createJWT, checkJWT };
