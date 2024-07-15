import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-64 h-full bg-gray-800 text-white shadow-lg">
        <div className="flex items-center justify-center h-16 bg-gray-900 shadow-md">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className="flex-grow">
          <nav className="flex flex-col mt-4">
            <Link to="send-money" className="flex items-center px-4 py-2 hover:bg-gray-700">
              Send Money
            </Link>
            <Link to="cash-out" className="flex items-center px-4 py-2 hover:bg-gray-700">
              Cash-Out
            </Link>
            <Link to="cash-in" className="flex items-center px-4 py-2 hover:bg-gray-700">
              Cash-In
            </Link>
            <Link to="balance-inquiry" className="flex items-center px-4 py-2 hover:bg-gray-700">
              Balance Inquiry
            </Link>
            <Link to="transactions-history" className="flex items-center px-4 py-2 hover:bg-gray-700">
              Transactions History
            </Link>
            <Link to="logout" className="flex items-center px-4 py-2 hover:bg-gray-700">
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
