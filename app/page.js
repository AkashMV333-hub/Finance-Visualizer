'use client'

'use client';

import { useTransactionContext } from '@/context/TransactionContext';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import Navbar from '@/components/Navbar';

export default function Home() {
  const { transactions, setTransactions } = useTransactionContext();

  return (
    <div className='overflow-hidden w-screen h-screen bgTransactions'>
      <div className="w-screen h-screen flex flex-col items-center overflow-y-auto">
        <div className="w-100 md:w-3/5 p-8 border-0 rounded-2xl mt-10 mb-10">
          <Navbar/>
          <TransactionForm setTransactions={setTransactions} />
          <TransactionList transactions={transactions} setTransactions={setTransactions} />
        </div>
      </div>
    </div>
  );
}

