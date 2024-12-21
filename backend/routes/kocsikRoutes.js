const express = require('express');
const {
    getKocsik,
    deleteKocsi,
} = require('../controllers/kocsikRouteControllers');

const router = express.Router();

router.get('/', getKocsik);
router.delete('/:id', deleteKocsi);

module.exports = router;
