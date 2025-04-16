'use client';

import React from 'react';

export default function SpendingInsights({ transactions, budgets }) {
  const budgetMap = {};
  budgets.forEach(b => {
    budgetMap[b.category] = b.amount;
  });

  const spentMap = {};
  transactions.forEach(txn => {
    if (!spentMap[txn.category]) spentMap[txn.category] = 0;
    spentMap[txn.category] += Number(txn.amount);
  });

  const overspent = [];
  const underspent = [];
  const noBudget = [];

  Object.keys(spentMap).forEach(category => {
    const spent = spentMap[category];
    const budget = budgetMap[category];

    if (budget === undefined) {
      noBudget.push({ category, spent });
    } else if (spent > budget) {
      overspent.push({ category, spent, difference: spent - budget });
    } else {
      underspent.push({ category, spent, difference: budget - spent });
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {/* Overspent */}
      <div className="bg-red-100 p-4 rounded-lg shadow">
        <h3 className="text-red-700 font-bold text-lg mb-2">Overspent</h3>
        <div className='flex justify-between text-red-700 font-bold text-md mb-2'>
            <h4>Category</h4>
            <h4>Amount</h4>
        </div>
        {overspent.length ? overspent.map(item => (
          <p key={item.category} className="text-sm text-red-800">
            <div className='flex justify-between'>
                <p>{item.category}</p>
                <p>₹{item.difference}</p>
            </div>
          </p>
        )) : <p className="text-sm text-red-800">No overspending 🎉</p>}
      </div>

      {/* Underspent */}
      <div className="bg-green-100 p-4 rounded-lg shadow">
        <h3 className="text-green-700 font-bold text-lg mb-2">Savings</h3>
        <div className='flex justify-between text-green-700 font-bold text-md mb-2'>
            <h4>Category</h4>
            <h4>Amount</h4>
        </div>
        {underspent.length ? underspent.map(item => (
        <p key={item.category} className="text-sm text-green-800">
            <div className='flex justify-between'>
                <p>{item.category}</p>
                <p>₹{item.difference}</p>
            </div>
        </p>    
        )) : <p className="text-sm text-green-800">No savings recorded</p>}
      </div>

      {/* No Budget */}
      <div className="bg-yellow-100 p-4 rounded-lg shadow">
        <h3 className="text-yellow-700 font-bold text-lg mb-2">No Budget</h3>
        {noBudget.length ? noBudget.map(item => (
          <p key={item.category} className="text-sm text-yellow-800 ">
              {item.category} 
          </p>
        )) : <p className="text-sm text-yellow-800">All categories have budgets</p>}
        <h4 className="text-yellow-700 text-md mt-2 mb-2">Set budget to track your spendings</h4>
      </div>
    </div>
  );
}
