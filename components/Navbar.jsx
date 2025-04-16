'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Transactions', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Budget', path: '/budget'}
  ];

  return (
    <nav className="bg-indigo-600 text-white px-4 py-3 shadow-md rounded-lg">
  <div className="flex justify-between items-center max-w-6xl mx-auto">
    <h1 className="text-lg font-semibold">Finance Visualizer</h1>
    
    {/* Desktop Navigation */}
    <div className="hidden md:flex gap-4">
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
    
    {/* Mobile Hamburger Button */}
    <button 
      className="md:hidden p-1 focus:outline-none"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isMobileMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  </div>
  
  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden mt-2 pb-2 space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`block px-3 py-2 rounded-md transition duration-200 ${
            pathname === item.path
              ? 'bg-white text-indigo-600 font-medium'
              : 'hover:bg-indigo-500'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</nav>
  );
}
