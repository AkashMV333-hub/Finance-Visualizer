'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = [
  '#4f46e5', '#ec4899', '#f97316', '#10b981',
  '#eab308', '#3b82f6', '#14b8a6', '#8b5cf6'
];

export default function CategoryPieChart({ transactions }) {
  const categoryTotals = {};

  transactions.forEach((txn) => {
    const category = txn.category || 'Uncategorized';
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }
    categoryTotals[category] += Number(txn.amount);
  });

  const data = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full h-[300px]">
      <h2 className="text-sm font-medium text-gray-500">Category-wise Breakdown</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
