import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";

const Main = () => {
    return(
        <div>
            {/* <Sidebar></Sidebar> */}
            <Outlet></Outlet>
        </div>
    )
};
export default Main;