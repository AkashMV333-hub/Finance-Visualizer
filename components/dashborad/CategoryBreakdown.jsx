'use client';

export default function CategoryBreakdown({ transactions }) {
  const categoryTotals = {};

  transactions.forEach((txn) => {
    const category = txn.category || 'Uncategorized';
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }
    categoryTotals[category] += Number(txn.amount);
  });

  const sortedCategories = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <h2 className="text-sm font-medium text-gray-500 mb-4">Category Breakdown</h2>
      <ul className="space-y-2">
        {sortedCategories.map(([category, total], index) => (
          <li
            key={index}
            className="flex justify-between text-sm text-gray-700 border-b border-gray-100 pb-1"
          >
            <span className="capitalize">{category}</span>
            <span className="font-semibold text-gray-800">₹{total.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
