const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    email: { type: String, required: true },
    date:  { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, default: 'Pending' },

});

module.exports = mongoose.model('Reservation', ReservationSchema);