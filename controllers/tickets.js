const Ticket = require('../models/Ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket, //bring to page to see form
    create  // filling out form 
};




function create(req, res) {
    req.body.flight=req.params.id;
    Ticket.create(req.body, function (err, ticket) {
        res.redirect(`/flights/${ticket.flight}`);
    });
}
//render the view
function newTicket(req, res) {
    res.render('tickets/new', {flightid: req.params.id});



}
//shift option f  -> formatting , no on ejs