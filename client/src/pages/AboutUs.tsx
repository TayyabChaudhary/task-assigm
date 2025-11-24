import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              We are dedicated to providing exceptional booking services that make your life easier. 
              Our platform connects you with the best services in your area.
            </p>
            <p className="text-gray-600 mb-4">
              Founded with a mission to simplify the booking process, we've helped thousands of 
              customers find and book the services they need quickly and efficiently.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide seamless, reliable, and user-friendly booking experiences that exceed 
              customer expectations while supporting service providers in growing their businesses.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              to="/"
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/booking"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
