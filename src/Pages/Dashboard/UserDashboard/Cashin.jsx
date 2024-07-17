import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cashin = () => {
  const [agentNumber, setAgentNumber] = useState('');
  const [agents, setAgents] = useState([]);
  const [amount, setAmount] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allUsers');
        const filteredAgents = response.data.filter(user => user.role === 'agent');
        setAgents(filteredAgents);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userOrders = { 
      userName: user.name,
      userNumber: user.mobileNumber,
      customerNumber: agentNumber,
      balance: amount,
      type: 'cash_in',
      status: 'pending',
      fee: 0,
     };
     try {
      const response = await fetch('http://localhost:5000/insertTransactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userOrders),
      });

      const data = await response.json();
      navigate('/dashboard/transactions-history');
      // console.log('hi')
    } catch (error) {
      console.error('Error Cash in Request:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cash-In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="agentNumber" className="text-sm font-semibold">
            Select Agent Number
          </label>
          <select
            id="agentNumber"
            value={agentNumber}
            onChange={(e) => setAgentNumber(e.target.value)}
            required
            className="input input-bordered"
          >
            <option value="" disabled>Select agent number</option>
            {agents.map(agent => (
              <option key={agent._id} value={agent.mobileNumber}>
                {agent.name} - {agent.mobileNumber}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm font-semibold">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="input input-bordered"
            placeholder="Enter amount"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Cashin;
