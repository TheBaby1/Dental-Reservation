import React, { useEffect, useState } from 'react';
import { getReservations } from '../services/reservationService';
import '../components/home.css';
import Navbar from '../components/Navbar.js';

const Reservations = () => {

    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getReservations();
            setReservations(data);
        };

        fetchData();
    }, []);

    return (
        <>
        <Navbar />
        <div>
            <h1 className="primary">Dental Reservations</h1>
            <ul>
                {reservations.map((res) => (
                    <li key={res._id}>
                        {res.name} - {res.date} at {res.time}
                    </li>
                ))}
            </ul>
        </div>
    </>
  );
    
}

export default Reservations;