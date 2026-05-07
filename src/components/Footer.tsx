import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 px-6 py-20 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl italic font-black">NIKE PRO</h3>
          <p className="text-sm text-zinc-500 font-medium leading-relaxed">
            Engineering the future of elite athletic performance through radical textile innovation.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-6">Explore</h4>
          <ul className="space-y-3">
            {['Training', 'Running', 'Football', 'Basketball'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-sm font-bold uppercase tracking-tight hover:opacity-50 transition-opacity text-zinc-400">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-6">Support</h4>
          <ul className="space-y-3">
            {['Help', 'Order Tracking', 'Returns', 'Privacy'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-sm font-bold uppercase tracking-tight hover:opacity-50 transition-opacity text-zinc-400">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-6">Connect</h4>
            <div className="flex space-x-4">
              {['IN', 'TW', 'FB'].map((item) => (
                <Link key={item} to="#" className="text-sm font-black border border-white/20 w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-[10px] font-mono text-zinc-600 mt-12">
            © 2024 NIKE PRO LABORATORY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
