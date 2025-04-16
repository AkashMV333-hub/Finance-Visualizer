'use client';

import { format } from 'date-fns';

export default function RecentTransactions({ transactions }) {
  const today = new Date();
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(today.getDate() - 1);


  const recentTransactions = transactions
    .filter((txn) => {
      const txnDate = new Date(txn.date);
      return txnDate >= threeDaysAgo && txnDate <= today;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <h2 className="text-sm font-medium text-gray-500 mb-4">Recent Transactions</h2>

      {recentTransactions.length === 0 ? (
        <p className="text-gray-400 text-sm">No recent transactions.</p>
      ) : (
        <ul className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
          {recentTransactions.map((txn) => (
            <li
              key={txn._id}
              className="flex justify-between text-sm text-gray-700 border-b border-gray-100 pb-1"
            >
              <div>
                <p className="font-medium">{txn.description}</p>
                <p className="text-xs text-gray-400">
                  {format(new Date(txn.date), 'dd MMM yyyy')}
                </p>
              </div>
              <span className="font-semibold text-right text-indigo-600">
                ₹{txn.amount}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
