const express = require('express');
const {
    getUjKocsi,
    postUjKocsi,
} = require('../controllers/ujKocsiRouteControllers');

const router = express.Router();

router.get('/', getUjKocsi);
router.post('/', postUjKocsi);

module.exports = router;
