'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleTransaction from './SingleTransaction';
import TransactionModal from './TransactionEditModal';

export default function TransactionList({ addTransaction }) {
  const [transactions, setTransactions] = useState([]);
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTransactions((prev) => [addTransaction, ...prev])
  }, [addTransaction])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/transactions');
        setTransactions(res.data);
      } catch (err) {
        console.error('Error fetching transactions:', err);
      }
    };

    fetchData();
  }, []);

   
  const handleEdit = (txn) => {
    setSelectedTxn(txn);
    setOpenModal(true);
  };

 
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
    <div className="space-y-4">
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
  );
}
