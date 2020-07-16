const router = require('express').Router();
const models = require('../database/models');
const { createJWT } = require('../services.js/authorizationServices');

router.post('/login', async (req, res) => {
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
