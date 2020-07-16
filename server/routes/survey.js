const router = require('express').Router();
const models = require('../database/models');

router.post('/', async (req, res) => {
  try {
    const surveyResult = models.Result.findOne({
      where: { id: req.params.id },
    });
    return res.send(surveyResult);
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Failed to create user',
    });
  }
});

router.post('/:id/take', async (req, res) => {
  try {
    const surveyResult = models.Result.findOne({
      where: { id: req.params.id },
    });
    return res.send(surveyResult);
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Survey not found',
    });
  }
});

router.get('/:id/result', async (req, res) => {
  try {
    const surveyResult = models.Result.findOne({
      where: { id: req.params.id },
    });

    return res.send(surveyResult);
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Failed to create user',
    });
  }
});

module.exports = router;
