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
                {users.map(user =>(
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.mobileNumber}</td>
                        <td>{user.role}</td>
                        <td>
                            <button className="mr-2 md:mr-4 btn-active btn-primary px-4 py-2 rounded font-semibold">Admin</button>
                            <button className="mr-2 md:mr-4 btn-active btn-primary px-4 py-2 rounded font-semibold">Agent</button>
                            <button className="mr-2 md:mr-4 btn-active btn-primary px-4 py-2 rounded font-semibold">User</button>
                            <button className="mr-2 md:mr-4 btn-active  btn-info px-4 py-2 rounded font-semibold">View Details</button>
                        </td>
                    </tr>
                ))
                }
                
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
