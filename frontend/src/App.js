import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/Home'; // Ensure Home component is correctly imported
import Reservations from './pages/Reservations';
import CreateReservation from './pages/CreateReservations';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Define a route for Home */}
      <Route path="/Reservations" element={<Reservations />} /> 
      <Route path="/create-reservation" element={<CreateReservation />} />
    </Routes>
  );
};

export default App;
