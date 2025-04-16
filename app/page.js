'use client'

import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import { useState } from "react";

export default function Home() {
  const [fetchTxns, setFetchTxns] = useState(false);

  return (
    <div className="flex flex-col items-center overflow-hidden bgImg" style={{width: "calc(100vw - 15px)"}}>
      <div className="w-100 md:w-3/5 overflow-auto bg-white p-8 border-0 rounded-2xl mt-10 mb-10">
        <TransactionForm  setFetchTxns={setFetchTxns}/>
        <TransactionList fetchTxns={fetchTxns}/>
      </div>
    </div>
  );
}
