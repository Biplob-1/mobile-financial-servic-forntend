import React, { useState } from 'react';

const Cashout = () => {
  const [agentNumber, setAgentNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Agent Number:', agentNumber);
    console.log('Amount:', amount);
    console.log('PIN:', pin);
    // Add your logic to cash out
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cash-Out</h1>
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
            <option value="agent1">Agent 1</option>
            <option value="agent2">Agent 2</option>
            <option value="agent3">Agent 3</option>
            {/* Add more options as needed */}
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
        <div className="flex flex-col">
          <label htmlFor="pin" className="text-sm font-semibold">
            PIN
          </label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            className="input input-bordered"
            placeholder="Enter your PIN"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Cashout;
