import React, { useState } from 'react';
import { createReservations } from '../services/reservationService';
import Navbar from '../components/Navbar.js';
import '../components/createReservation.css';

const CreateReservations = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createReservations(formData);
            setSuccessMessage('Reservation Created Successfully!');
            setFormData({ name: '', email: '', date: '', time: ''});
        } catch (error) {
            console.error('Error Creating Reservation', error);
        }
    };


    return (
        <>
        <Navbar></Navbar>

        <div>
            <h1 className="title">Create a New Reservation</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>

                <label>
                    Email: 
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>

                <label>
                    Date: 
                    <input 
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>

                <label>
                    Time: 
                    <input 
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>
                <button type="submit">Create Reservation</button>
            </form> 
                {successMessage && <p styke={{ color: 'green'}}>{successMessage}</p> }
        </div>

        </>
    )
}

export default CreateReservations;