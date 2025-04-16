'use client';

export default function TotalExpensesCard({ transactions }) {
  const total = transactions.reduce((result, txn) => result + txn.amount, 0);

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <h2 className="text-sm font-medium text-gray-500 mb-2">Total Expenses</h2>
      <p className="text-2xl font-bold text-red-600">₹{total}</p>
    </div>
  );
}
