'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleTransaction from './SingleTransaction';
import TransactionModal from './TransactionEditModal';
import MonthlyBarChart from './MonthlybarChart';

export default function TransactionList({ transactions, setTransactions }) {
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [reverseTransactions, setReverseTransactions] = useState([])
   
  const handleEdit = (txn) => {
    setSelectedTxn(txn);
    setOpenModal(true);
  };

  useEffect(() => setReverseTransactions(transactions.reverse()), [transactions])
 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      setTransactions((prev) => prev.filter((txn) => txn._id !== id));
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

 
  const handleUpdate = (updatedTxn) => {
    const updated = transactions.map((txn) =>
      txn._id === updatedTxn._id ? updatedTxn : txn
    );
    setTransactions(updated);
  };

  return (
    <div className="space-y-4 mb-6 ">
      <MonthlyBarChart transactions={reverseTransactions} /> 

      <div className='flex flex-col gap-4 bg-white p-8 rounded-xl'>
        <h1 className='font-bold font-black text-2xl'>Transactions List</h1>
        {transactions.length === 0 ? (
          <p>No transactions available.</p>
        ) : (
          transactions.map((txn) => (
            <SingleTransaction
              key={txn._id}
              txn={txn}
              onEdit={() => handleEdit(txn)}
              onDelete={() => handleDelete(txn._id)}
            />
          ))
        )}

        {selectedTxn && (
          <TransactionModal
            txn={selectedTxn}
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            onUpdate={handleUpdate}
          />
        )}
       </div>
    </div>
  );
}
