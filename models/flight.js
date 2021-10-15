const mongoose = require('mongoose');
const Schema = mongoose.Schema; 





const destinationSchema = new Schema({
    content: String,
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
        required: true //most pro databases have this
    }
    }, {
        timestamps: true
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
    flight: {type: Schema.Types.ObjectId, ref: 'Flight'},
    destinations: [destinationSchema]
    }, {
        timestamps: true
    });

module.exports = mongoose.model('Flight', flightSchema);