import React, { useEffect, useState } from 'react';
import { getReservations, deleteReservations } from '../services/reservationService';
import { useNavigate } from 'react-router-dom';
import '../components/home.css';
import '../components/table.css';
import '../components/button.css';
import '../App.css';
import Navbar from '../components/Navbar.js';

const Reservations = () => {

    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getReservations();
            setReservations(data);
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteReservations(id);
            setReservations(reservations.filter((res) => res._id !== id));
        } catch (error) {
            console.error('Error Deleting Reservation: ', error);
        }
    };

    const handleUpdateClick = (id) => {
        navigate(`/update-reservation/${id}`);
    }

    return (
        <>
        <Navbar />
        <div>
            <h1 className="primary">Dental Reservations</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {reservations.map((res) => (
                        <tr key={res._id}>
                            <td>{res.name}</td>
                            <td>{res.date}</td>
                            <td>{res.time}</td>
                            <td>
                                <button className="delete" onClick={() => handleDelete(res._id)}>Delete</button>
                                <button className="update" onClick={() => handleUpdateClick(res._id)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  );
    
}

export default Reservations;