const express = require('express');
const {
    getEgyediKocsi,
    modositEgyediKocsi,
} = require('../controllers/egyediKocsiRouteControllers');

const router = express.Router();

router.get('/:id', getEgyediKocsi);
router.put('/:id', modositEgyediKocsi);

module.exports = router;
