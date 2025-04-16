'use client';

export default function RangeSelector({ selectedRange, setSelectedRange }) {
  return (
    <div className="flex gap-4 mb-6">
      {['Year', 'Month', 'Week'].map((range) => (
        <button
          key={range}
          onClick={() => setSelectedRange(range.toLowerCase())}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedRange === range.toLowerCase()
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
}
