'use client';

import { useEffect, useState } from "react";

export default function TotalExpensesCard({ transactions }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = transactions.reduce((result, txn) => result + Number(txn.amount), 0);
    setTotal(newTotal);
  }, [transactions]);

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <h2 className="text-sm font-medium text-gray-500 mb-2">Total Expenses</h2>
      <p className="text-2xl font-bold text-red-600">₹{total}</p>
    </div>
  );
}
