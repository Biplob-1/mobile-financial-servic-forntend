import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const SendMoney = () => {
  const [recipientNumber, setRecipientNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');

  const {user} = useContext(AuthContext);
  console.log('user info', user?.name);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Recipient Number:', recipientNumber);
    console.log('Amount:', amount);
    console.log('PIN:', pin);
    // Add your logic to send money
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Send Money</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="recipientNumber" className="text-sm font-semibold">
            Recipient Number
          </label>
          <select
            id="recipientNumber"
            value={recipientNumber}
            onChange={(e) => setRecipientNumber(e.target.value)}
            required
            className="input input-bordered"
          >
            <option value="" disabled>Select recipient number</option>
            <option value="1234567890">1234567890</option>
            <option value="0987654321">0987654321</option>
            <option value="1122334455">1122334455</option>
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

export default SendMoney;
