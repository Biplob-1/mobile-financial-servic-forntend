import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p>Welcome to the User Dashboard!</p>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
