const { Router } = require('express');
const { checkJWT } = require('../services/authorizationServices');
const authRoutes = require('./auth');
const surveyRoutes = require('./survey');
const imageRoutes = require('./image');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));
router.use('/user', authRoutes);
router.use('/survey', checkJWT, surveyRoutes);
router.use('/image', imageRoutes);

module.exports = router;
