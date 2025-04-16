'use client';

import { useState } from 'react';
import axios from 'axios';

const categories = ['Groceries', 'Food', 'Vegetables', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Other'];

export default function BudgetForm({ onBudgetAdded }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const currentMonth = new Date().toISOString().slice(0, 7); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !amount) return alert('Please fill all fields');

    try {
      await axios.post('/api/budgets', {
        category,
        amount,
        month: currentMonth,  
      });
      onBudgetAdded();
      setCategory('');
      setAmount('');
    } catch (err) {
      console.error('Failed to add budget:', err);
      alert('Failed to save budget');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Set Monthly Budget</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="mb-1 text-sm font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none"
          >
            <option value="">Select</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full sm:w-1/2">
          <label className="mb-1 text-sm font-medium">Budget Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none"
            placeholder="₹"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 h-[42px] text-white px-5 py-2 rounded mt-2 sm:mt-0 hover:bg-indigo-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}

