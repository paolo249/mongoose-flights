const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

// POST /flights/:id/destinations  (create a destination for a flight)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;