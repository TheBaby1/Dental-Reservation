const express = require('express');
const router = express.Router();
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
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from the URL
        const updatedReservation = await Reservation.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true } // Return the updated document, validate inputs
        );

        if (!updatedReservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        res.status(200).json({ message: 'Successfully Updated Reservation!', reservation: updatedReservation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Reservation
router.delete('/:id', async (req, res) => { // Add ":id" to the route
    try {
        const { id } = req.params; // Extract ID from the URL
        const deletedReservation = await Reservation.findByIdAndDelete(id);

        if (!deletedReservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        res.status(200).json({ message: 'Reservation deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;