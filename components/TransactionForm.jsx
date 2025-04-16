'use client';

import { useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function TransactionForm({ setTransactions }) {
  const [form, setForm] = useState({
    amount: '',
    description: '',
    date: '',
    category: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.amount || !form.description || !form.date || !form.category) {
      toast.error('All fields are required.');
    }

    try {
      setLoading(true);
      const res = await axios.post('/api/transactions', form);
      setTransactions((prev) => [ form, ...prev]);
      setForm({ amount: '', description: '', date: '', category: '' });
      if(res) return toast.success("Transaction added!");
    } catch (err) {
      toast.error("Failed to add transaction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded-lg border w-full max-w-xl mx-auto mt-10">
      <h1 className='font-bold font-black text-2xl'>New Transaction</h1>
      <div>
        <Label className={"mb-3"}>Amount</Label>
        <Input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label className={"mb-3"}>Category</Label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select Category</option>
          <option value="Groceries">Groceries</option>
          <option value="Food">Food</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Other">Other</option>
        </select>
      </div>


      <div>
        <Label className={"mb-3"}>Description</Label>
        <Input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label className={"mb-3"}>Date</Label>
        <Input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={loading} >
        {loading ? 'Saving...' : 'Add Transaction'}
      </Button>
    </form>
  );
}
