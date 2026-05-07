import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Promo Bar */}
      <div className="bg-white text-black py-2 px-6 flex justify-center items-center space-x-4">
        <span className="text-[10px] font-black uppercase tracking-widest">Livraison gratuite pour les membres</span>
        <button className="text-[10px] font-black uppercase tracking-widest underline decoration-2 underline-offset-4">Détails</button>
      </div>

      <nav className={cn(
        "px-6 py-8 flex items-center justify-between transition-all duration-500",
        isHome ? "bg-transparent" : "bg-black/90 backdrop-blur-md"
      )}>
        <Link to="/" className="flex items-center">
          <span className="font-normal text-[40px] md:text-[60px] tracking-tighter uppercase leading-none">NYFORTEL_CLUB</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          {[
            { name: 'Gravel running', path: '/collection?cat=gravel' },
            { name: 'Trail running', path: '/collection?cat=trail' },
            { name: 'Course à pied', path: '/collection?cat=run' },
            { name: 'Randonnée', path: '/collection?cat=hike' },
            { name: 'Sportstyle', path: '/collection' }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[10px] uppercase font-black tracking-[0.2em] hover:opacity-50 transition-opacity"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/20">
            <Search size={14} className="mr-2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Rechercher un produit..." 
              className="bg-transparent border-none text-[10px] font-bold uppercase tracking-widest focus:outline-none w-40 placeholder:text-zinc-500"
            />
          </div>
          
          <Link to="/auth" className="hidden md:flex items-center space-x-2 text-[10px] uppercase font-black tracking-widest hover:opacity-50 transition-opacity">
            <User size={16} />
            <span>Se connecter</span>
          </Link>

          <button className="hover:opacity-50 transition-opacity relative">
            <ShoppingBag size={20} strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 bg-white text-black text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          
          <button className="lg:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}
