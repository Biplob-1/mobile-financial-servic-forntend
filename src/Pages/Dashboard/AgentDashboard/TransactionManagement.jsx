import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const TransactionManagement = () => {
    const { user } = useContext(AuthContext);
    const [balanceData, setBalanceData] = useState([]);

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const response = await axios.get('http://localhost:5000/allTransaction');
                const filteredData = response.data.filter(d => d.status === 'pending');
                setBalanceData(filteredData);
            } catch (error) {
                console.error('Error fetching Transaction:', error); 
            }
        };
        fetchTransaction();
    }, []);

    const handleApprove = async (transactionId) => {
        try {
            const response = await axios.put(`http://localhost:5000/updateTransactionStatus/${transactionId}`, {
                status: 'approved'
            });

            if (response.data.success) {
                setBalanceData(balanceData.map(data => 
                    data._id === transactionId ? { ...data, status: 'approved' } : data
                ));
                Swal.fire({
                    icon: 'success',
                    title: 'Transaction Approved',
                    text: 'The transaction has been approved successfully.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Approve',
                    text: response.data.message,
                });
            }
        } catch (error) {
            console.error('Error updating transaction status:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Insufficient Balance.',
            });
        }
    };

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Transaction Management</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th> 
                            <th>Phone</th> 
                            <th>Amount</th> 
                            <th>Type</th> 
                            <th>Status</th> 
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {balanceData.map(data => (
                            <tr key={data._id}>
                                <td>{data.userName}</td>
                                <td>{data.userNumber}</td>
                                <td>{data.balance}</td>
                                <td>{data.type}</td>
                                <td className="text-red-600">{data.status}</td>
                                <td>
                                    <button className="mr-2 md:mr-4 btn-active btn-info px-4 py-2 rounded font-semibold" onClick={() => handleApprove(data._id)}>Approve</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default TransactionManagement;
