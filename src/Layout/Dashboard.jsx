import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(AuthContext);
    return(
        <div className="flex ">
        <Sidebar></Sidebar>
        <div className="flex-grow p-6">
          <h1 className="text-2xl font-bold mb-4">{user.name} Dashboard</h1>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    )
};
export default Dashboard;