'use client';

import { Button } from '@/components/ui/button';

export default function SingleTransaction({ txn, onEdit, onDelete }) {
  const { description, category, amount, date } = txn;

  return (
    <div className="flex justify-between items-center p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-all">
      <div className="flex flex-col">
        <span className="font-medium text-lg">{description}</span>
        <span className="text-sm text-gray-500">{category || 'No category'}</span>
        <span className="text-sm text-gray-400">{new Date(date).toLocaleDateString()}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className={`font-semibold ${amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
          ₹{amount}
        </span>

        <Button variant="outline" size="sm" onClick={onEdit}>
          Edit
        </Button>

        <Button variant="destructive" size="sm" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
