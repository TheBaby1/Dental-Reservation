import axios from 'axios';

const API_URL = 'http://localhost:5000/reservations';

export const getReservations = () => axios.get(API_URL);
export const createReservations = (data) => axios.post(API_URL, data);
export const updateReservations = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteReservations = (id) => axios.delete(`${API_URL}/${id}`);
