const router = require('express').Router();
const models = require('../database/models');
const { createJWT } = require('../services/authorizationServices');
const { loginCheck } = require('../services/validator');

router.post('/login', loginCheck, async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await models.User.findOrCreate({
      where: { username },
      defaults: { password },
    });
    return createJWT({ id: user.id }, res);
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Failed to create user',
    });
  }
});

module.exports = router;
