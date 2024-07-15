import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { mobileNumber, pin };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (data.success) {
        console.log('Login successful:', data);
        navigate('/dashboard');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="pin" className="label">
              <span className="label-text">PIN</span>
            </label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Please Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
