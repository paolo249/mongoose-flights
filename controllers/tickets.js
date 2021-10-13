const Ticket = require('../models/Ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToTicket
};


function addToTicket(req, res) {
    Flight.findById(req.params.ticketId, function(err, flights) {
      flights.flight.push(req.body.ticketId);
      flights.save(function(err) {
        res.redirect(`/tickets/${flights._id}`);
      });
    });
  }

  function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            performers
    });
  });
}
  
  function newTicket(req, res) {
   Ticket.find({})
      .sort('name')
      .exec(function (err, tickets) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        tickets
      });
    })
  }
  