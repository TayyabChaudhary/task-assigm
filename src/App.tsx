import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';
import './App.css';
import { TopNavbar } from './components';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
