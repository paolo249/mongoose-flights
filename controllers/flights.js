const Flight = require('../models/flight');

module.exports = {
  index,
  create,  
  new: newFlight,
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

function newFlight(req, res) {
  res.render('flights/new');
}