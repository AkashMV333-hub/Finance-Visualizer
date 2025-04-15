'use client'

import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import { useState } from "react";

export default function Home() {
  const [addTransaction, setAddTransaction] = useState({})

  return (
    <div className="">
      <TransactionForm setAddTransaction={setAddTransaction}/>
      <TransactionList addTransaction={addTransaction}/>
    </div>
  );
}
