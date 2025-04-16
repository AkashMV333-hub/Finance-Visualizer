'use client';

import { useTransactionContext } from '@/context/TransactionContext';
import TotalExpensesCard from '@/components/dashborad/TotalExpensesCard';
import CategoryPieChart from '@/components/dashborad/CategoryPieChart';
import CategoryBreakdown from '@/components/dashborad/CategoryBreakdown';
import RecentTransactions from '@/components/dashborad/RecentTransactions';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
    const { transactions, setTransactions } = useTransactionContext();

    useEffect(() => console.log(`Transactions ${transactions}`), [transactions]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden bgCategory">
      <div className="w-100 md:w-3/5 overflow-hidden border-0 rounded-2xl " style={{height: "calc(100vh - 50px)"}}>
        <Navbar/>
        <div className=" space-y-6 overflow-hidden mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CategoryPieChart transactions={transactions} />
            <div className='flex flex-col gap-4'>
              <TotalExpensesCard transactions={transactions} />
              <CategoryBreakdown transactions={transactions} />
            </div>
          </div>

          <div className="mt-6">
            <RecentTransactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
