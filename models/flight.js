const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const destinationSchema = new Schema({
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    }, 
    arrival: {
        type: Date
    }
});


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'SouthWest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
        
    },
    flightNo: {
        type: Number,
        // minLength: 10,
        // maxLength: 9999
    },
    departs: {
        type: Date,
        default: function() {
            d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let c = new Date(year + 1, month, day);
            return c; 
        }
    },
    status: {
        type: String, 
        enum: ['LANDED','DELAYED','BOARDED']
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);