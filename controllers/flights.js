const Flight = require('../models/flight');
const Ticket = require('../models/Ticket');

module.exports = {
  index,
  create,  
  new: newFlight,
  show, 
}


function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {flights: flights});
    })
  } 

function create(req, res) {
  req.body.nowBoarding = !!req.body.nowBoarding;
  
  for (let key in req.body) {
  if (req.body[key] === '') delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function(err) {
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights');
  });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render("flights/show", {
            flight,
            title: "Details",
            tickets
        });
      })
  })
}

function newFlight(req, res) {
  res.render('flights/new');
}