const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/new', ticketsCtrl.new);
router.post('/tickets', ticketsCtrl.create);
// POST /tickets/:ticketId/tickets
router.post('/movies/:movieId/tickets', ticketsCtrl.addToTickets);


module.exports = router;