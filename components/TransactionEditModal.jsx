'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';

export default function TransactionModal({ txn, isOpen, onClose, onUpdate }) {
  const [editedTxn, setEditedTxn] = useState({ ...txn });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setEditedTxn({ ...txn });
  }, [txn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTxn((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(`/api/transactions/${txn._id}`, editedTxn);
      onUpdate(response.data);
      setLoading(false);
      onClose();
    } catch (err) {
      setLoading(false);
      setError('Failed to update transaction.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Transaction</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Description</label>
            <Input
              type="text"
              name="description"
              value={editedTxn.description}
              onChange={handleChange}
              className="text-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Category</label>
            <select
              name="category"
              value={editedTxn.category || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Category</option>
              <option value="Groceries">Groceries</option>
              <option value="Food">Food</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Amount</label>
            <Input
              type="number"
              name="amount"
              value={editedTxn.amount}
              onChange={handleChange}
              className="text-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Date</label>
            <Input
              type="date"
              name="date"
              value={editedTxn.date?.slice(0, 10)}
              onChange={handleChange}
              className="text-lg"
              required
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

