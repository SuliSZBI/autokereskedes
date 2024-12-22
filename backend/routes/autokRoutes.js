const express = require('express');
const { getAutok } = require('../controllers/autokRouteControllers');

const router = express.Router();

router.get('/', getAutok);

module.exports = router;
