import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-colors duration-500",
      isHome ? "bg-transparent" : "bg-black/90 backdrop-blur-md"
    )}>
      <Link to="/" className="flex items-center space-x-2">
        <span className="font-black text-2xl tracking-tighter italic">NIKE PRO</span>
      </Link>

      <div className="hidden md:flex items-center space-x-12">
        {['Collection', 'Journal', 'Innovation'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-xs uppercase font-bold tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <button className="hover:opacity-50 transition-opacity">
          <Search size={20} strokeWidth={2.5} />
        </button>
        <button className="hover:opacity-50 transition-opacity relative">
          <ShoppingBag size={20} strokeWidth={2.5} />
          <span className="absolute -top-1 -right-1 bg-white text-black text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
            2
          </span>
        </button>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
