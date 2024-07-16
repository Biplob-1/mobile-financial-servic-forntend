import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from 'axios';

const UserManagement = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allUsers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

const updateUserRole = async (userId, newRole, balance) => {
    try {
        const response = await axios.put(`http://localhost:5000/updateUserRole/${userId}`, {
            role: newRole,
            balance: balance
          });
          // Update local state after successful API update
          setUsers(prevUsers => prevUsers.map(user => user._id === userId ? { ...user, role: newRole } : user));
    } catch (error) {
        console.error('Error updating user role:', error);
    }
};
const handleAdminClick = (userId) => {
    updateUserRole(userId, 'admin', 0);
  };

  const handleUserClick = (userId, currentBalance) => {
    updateUserRole(userId, 'user', 40);
  };

  const handleAgentClick = (userId, currentBalance) => {
    updateUserRole(userId, 'agent', 10000);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th> 
              <th>Phone</th> 
              <th>Status</th> 
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === 'admin' ? (
                    <button className="mr-2 md:mr-4 btn-primary px-4 py-2 rounded font-semibold" disabled>Admin</button>
                  ) : (
                    <button className="mr-2 md:mr-4 btn-active btn-primary px-4 py-2 rounded font-semibold" onClick={() => handleAdminClick(user._id)}>Make Admin</button>
                  )}
                  {user.role === 'user' ? (
                    <button className="mr-2 md:mr-4 btn-primary px-4 py-2 rounded font-semibold" disabled>User</button>
                  ) : (
                    <button className="mr-2 md:mr-4 btn-active btn-primary px-4 py-2 rounded font-semibold" onClick={() => handleUserClick(user._id, user.balance)}>Make User</button>
                  )}
                  {user.role === 'agent' ? (
                    <button className="mr-2 md:mr-4 btn-primary px-4 py-2 rounded font-semibold" disabled>Agent</button>
                  ) : (
                    <button className="mr-2 md:mr-4 btn-active btn-primary px-4 py-2 rounded font-semibold"  onClick={() => handleAgentClick(user._id, user.balance)}>Make Agent</button>
                  )}
                  <button className="mr-2 md:mr-4 btn-active btn-info px-4 py-2 rounded font-semibold">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
