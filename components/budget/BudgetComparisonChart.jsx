'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function BudgetComparisonChart({ budgets }) {
  const [transactions, setTransactions] = useState([]);

  const categories = ['Groceries', 'Food', 'Vegetables', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Other'];

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get('/api/transactions');
        setTransactions(res.data);
      } catch (err) {
        console.error('Error fetching transactions:', err);
      }
    };

    fetchTransactions();
  }, []);

  const data = categories.map((category) => {
    const budget = budgets.find((b) => b.category === category)?.amount || 0;
    const actualSpent = transactions
      .filter((txn) => txn.category === category)
      .reduce((sum, txn) => sum + Number(txn.amount), 0);

    return {
      category,
      Budgeted: budget,
      Spent: actualSpent,
    };
  });

  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-xl shadow mt-8">
      <h2 className="text-lg font-semibold mb-4">Budget vs Actual Spending</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Budgeted" fill="#34d399" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Spent" fill="#f87171" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

