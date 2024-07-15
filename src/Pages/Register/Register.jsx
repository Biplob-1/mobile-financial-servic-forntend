import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Name:', name);
    console.log('PIN:', pin);
    console.log('Mobile Number:', mobileNumber);
    console.log('Email:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="pin" className="label">
              <span className="label-text">Your PIN</span>
            </label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
              pattern="\d{5}"
              title="PIN must be a 5-digit number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="mobileNumber" className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              pattern="^\d{11}$"
              title="Mobile number must be a 11-digit number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Please Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
