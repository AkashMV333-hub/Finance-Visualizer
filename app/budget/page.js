'use client';

import { useTransactionContext } from '@/context/TransactionContext';
import { useState, useEffect } from 'react';
import BudgetForm from '@/components/budget/BudgetForm';
import BudgetComparisonChart from '@/components/budget/BudgetComparisonChart';
import SpendingInsights from '@/components/budget/SpendingInsights';
import axios from 'axios';
import Navbar from '@/components/Navbar';

export default function BudgetPage() {
  const [refresh, setRefresh] = useState(false);
  const [budgets, setBudgets] = useState([]);

  const { transactions } = useTransactionContext();

  const fetchBudgets = async () => {
    try {
      const res = await axios.get('/api/budgets');
      setBudgets(res.data);
    } catch (err) {
      console.error('Error fetching budgets:', err);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, [refresh]);

  return (
    <div className="w-screen h-screen bgBudget">
      <div className='w-screen h-screen flex flex-col items-center justify-center overflow-y-auto'>
      <div className="w-screen md:w-3/5 border-0 rounded-2xl " style={{height: "calc(100vh - 50px)"}}> 
        <div className="max-w-5xl mx-auto px-4 py-6">
            <Navbar/>
            <BudgetForm onBudgetAdded={() => setRefresh((prev) => !prev)} />
            <BudgetComparisonChart budgets={budgets} />  
            <SpendingInsights transactions={transactions} budgets={budgets} />
        </div>
      </div>
      </div>
    </div>
  );
}
