const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req,res) {
    Flight.findById(req.params.id, function(err, flightDoc) {
        console.log(req.body);
        flightDoc.destinations.push(req.body);
        flightDoc.save(function(err) {
            console.log(flightDoc);
            res.redirect(`/flights/${flightDoc._id}`);
        });
    });
}
