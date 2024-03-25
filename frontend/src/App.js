import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import HomePage from './components/authentication/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Signup />} />
    </Routes>
  );
}

export default App;