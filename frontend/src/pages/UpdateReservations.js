import React, { useEffect, useState } from 'react';
import { getReservations, updateReservations } from '../services/reservationService';
import Navbar from '../components/Navbar.js';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateReservation = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
    });

    useEffect(() => {
        const fetchReservation = async () => {
            try {
                const { data } = await getReservations();
                const reservation = data.find((res) => res._id === id);

                if (reservation) {
                    setFormData({
                        name: reservation.name,
                        date: reservation.date,
                        time: reservation.time,
                    })
                }
            } catch (error) {
                console.error('Error fetching Reservations');
            }
        };

        fetchReservation();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateReservations(id, formData);
            navigate('/');
        } catch (error) {
            console.error('Error Updating Reservation: ', error);
        }

    };

    return (
        <>
            <Navbar />
            <div>
                <h1>Update Reservation</h1>
                <form onSubmit={handleUpdate}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Time:
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Update</button>
                </form>
            </div>
        </>
    );

}

export default UpdateReservation;