import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserDashboard from "../Pages/Dashboard/UserDashboard/UserDashboard";
import AgentDashboard from "../Pages/Dashboard/AgentDashboard/AgentDashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import SendMoney from "../Pages/Dashboard/UserDashboard/SendMoney";
import Cashout from "../Pages/Dashboard/UserDashboard/Cashout";
import Cashin from "../Pages/Dashboard/UserDashboard/Cashin";
import BalanceInquiry from "../Pages/Dashboard/UserDashboard/BalanceInquiry";
import TransactionsHistory from "../Pages/Dashboard/UserDashboard/TransactionsHistory";
import Dashboard from "../Layout/Dashboard";
import UserManagement from "../Pages/Dashboard/AdminDashboard/UserManagement";
import SystemMonitoring from "../Pages/Dashboard/AdminDashboard/SystemMonitoring";
import TransactionManagement from "../Pages/Dashboard/AgentDashboard/TransactionManagement";
import LogOut from "../Pages/Dashboard/LogOut/LogOut";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/userDashboard',
            element: <UserDashboard></UserDashboard>
        },
        {
            path: '/agentDashboard',
            element: <AgentDashboard></AgentDashboard>
        },
        {
            path: '/adminDashboard',
            element: <AdminDashboard></AdminDashboard>
        },
      ]
    },
    {
        path: 'dashboard',
        element:<Dashboard></Dashboard>,
        children: [
            // admin components
            {
                path: 'user-management',
                element: <UserManagement></UserManagement>
            },
            {
                path: 'system-monitoring',
                element: <SystemMonitoring></SystemMonitoring>
            },
            // agent components
            {
                path:'transaction-management',
                element: <TransactionManagement></TransactionManagement>
            },
            // user components
            {
                path: 'send-money',
                element: <SendMoney></SendMoney>
            },
            {
                path: 'cash-out',
                element: <Cashout></Cashout>
            },
            {
                path: 'cash-in',
                element: <Cashin></Cashin>
            },
            // common components
            {
                path: 'balance-inquiry',
                element: <BalanceInquiry></BalanceInquiry>
            },
            {
                path: 'transactions-history',
                element: <TransactionsHistory></TransactionsHistory>
            },
            {
                path: 'logout',
                element: <LogOut></LogOut>
            }
        ]
    }
  ]);
