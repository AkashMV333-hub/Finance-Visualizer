'use client';

import { Button } from '@/components/ui/button';

export default function SingleTransaction({ txn, onEdit, onDelete }) {
  const { description, category, amount, date } = txn;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-all gap-3 sm:gap-0">
  <div className="flex flex-col w-full sm:w-auto">
    <span className="font-medium text-base sm:text-lg">{description}</span>
    <span className="text-xs sm:text-sm text-gray-500">{category || 'No category'}</span>
    <span className="text-xs sm:text-sm text-gray-400">
      {new Date(date).toLocaleDateString()}
    </span>
  </div>

  <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-2 sm:gap-4">
    <span className={`font-semibold text-sm sm:text-base ${amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
      ₹{Math.abs(amount)}
    </span>

    <div className="flex gap-2 sm:gap-3">
      <Button 
        variant="outline" 
        className="text-xs p-1 sm:text-sm sm:p-2" 
        onClick={onEdit}
      >
        Edit
      </Button>
      <Button 
        variant="destructive" 
        className="text-xs p-1 sm:text-sm sm:p-2" 
        onClick={onDelete}
      >
        Delete
      </Button>
    </div>
  </div>
</div>
  );
}
