'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

export default function MonthlyBarChart({ transactions }) {
  const getLast12Months = () => {
    const months = [];
    const currentDate = new Date();

    for (let i = 11; i >= 0; i--) {
      const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const key = d.toLocaleString('default', { month: 'short', year: 'numeric' }); // e.g. "Apr 2025"
      months.push(key);
    }

    return months;
  };

  const monthKeys = getLast12Months();
 

  const monthlyTotals = monthKeys.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

 
  transactions.forEach((txn) => {
    const date = new Date(txn.date);
    const key = date.toLocaleString('default', { month: 'short', year: 'numeric' });
    if (monthlyTotals[key] !== undefined) {
      monthlyTotals[key] += Number(txn.amount);
    }
  });

  const data = monthKeys.map((month) => ({
    month,
    total: monthlyTotals[month],
  }));

  return (
    <div className="w-full h-[350px] p-4 bg-white rounded-xl shadow mt-15 mb-15">
      <h1 className="text-2xl font-bold font-black mb-4">Monthly Expenses</h1>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


