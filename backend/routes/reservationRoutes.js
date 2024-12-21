const express = require('express');
const router = express.router();
const Reservation = require('../models/Reservation');

// Create a Reservation
router.post('/', async (req, res) => {

    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(200).json({ message: 'Successfully Created Reservation'});
    } catch (error) {
        res.status(500).json({ error: error.message });  
    }
})

// Read Reservations
router.get('/', async (req, res) => {

    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Update a Reservation
router.put('/', async (req, res) => {

    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Successfully Updated Reservation!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Delete a Reservation
router.delete('/', async (req, res) => {

    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Reservation Deleted!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;