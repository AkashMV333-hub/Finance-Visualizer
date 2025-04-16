'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Transactions', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Budget', path: '/budget'}
  ];

  return (
    <nav className="bg-indigo-600 text-white px-4 py-3 shadow-md rounded-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-lg font-semibold">Finance Visualizer</h1>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-1 rounded-md transition duration-200 ${
                pathname === item.path
                  ? 'bg-white text-indigo-600 font-medium'
                  : 'hover:bg-indigo-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
