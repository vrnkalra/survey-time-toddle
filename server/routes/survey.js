const router = require('express').Router();
const models = require('../database/models');

router.post('/', async (req, res) => {
  try {
    const { name, questions } = req.body;

    const survey = await models.Survey.create({
      user_id: req.user_id,
      name,
    });
    const questionCreatePromise = questions.map(async (q) => {
      await models.Question.create({ survey_id: survey.id, q });
    });

    await Promise.all(questionCreatePromise);

    return res.send({
      message: 'Success! Survey created',
      survey,
    });
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Failed to create user',
    });
  }
});

router.post('/:id/take', async (req, res) => {
  try {
    const { answers } = req.body;

    const resultCreatePromise = answers.map(async (answer) => {
      await models.Question.create({
        survey_id: req.params.id,
        question_id: answer.question_id,
        answer: answer.value,
      });
    });

    await Promise.all(resultCreatePromise);

    return res.send({
      message: 'Success! Result created',
    });
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Internal Server Error',
    });
  }
});

router.get('/:id/result', async (req, res) => {
  try {
    const surveyResult = await models.Result.findAll({
      where: { survey_id: req.params.id },
    });
    const surveyQuestions = await models.Question.findAll({
      where: { survey_id: req.params.id },
    });

    if (surveyResult && surveyQuestions) {
      return res.send({
        result: surveyResult,
        questions: surveyQuestions,
      });
    }
    return res.send({
      message: `No result found for the id : ${req.params.id}`,
    });
  } catch (error) {
    return res.status(500).send({
      error,
      message: 'Failed to get result',
    });
  }
});

module.exports = router;
