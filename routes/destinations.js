const express = require('express');
const router = express.Router();

const destinationCtrl = require('../controllers/destinations');



// POST /flights/:id/destinations  (create a destination for a flight)
router.post('/flights/:id/destinations', destinationCtrl.create);

module.exports = router;