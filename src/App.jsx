import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import EventList from './components/EventList';
import RegisterForm from './components/RegisterForm';
import EventLayout from './components/eventLayout';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/My-events" element={<EventList />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/events" element={<EventLayout />} />
    </Routes>
  );
}

export default App;
