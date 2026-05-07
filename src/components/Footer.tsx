import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 px-6 py-20 pb-10">
      {/* Value Props */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-b border-white/5 pb-24">
        <div className="flex flex-col items-center text-center space-y-4">
          <RefreshCw size={24} className="text-zinc-500" />
          <h4 className="text-[10px] font-black uppercase tracking-widest leading-none">Retours et échanges sous 30 jours</h4>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <Truck size={24} className="text-zinc-500" />
          <h4 className="text-[10px] font-black uppercase tracking-widest leading-none">Livraison gratuite pour les membres</h4>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <ShieldCheck size={24} className="text-zinc-500" />
          <h4 className="text-[10px] font-black uppercase tracking-widest leading-none">Garantie de qualité de deux ans</h4>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl italic font-black">NYFORTEL_CLUB</h3>
          <p className="text-sm text-zinc-500 font-medium leading-relaxed">
            Équipement technique de niche pour l'exploration de haute altitude et la performance outdoor minimaliste.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-6">Produits</h4>
          <ul className="space-y-3">
            {['Chaussures de trail', 'Running de route', 'Randonnée technique', 'Sportstyle'].map((item) => (
              <li key={item}>
                <Link to="#" className="text-sm font-bold uppercase tracking-tight hover:opacity-50 transition-opacity text-zinc-400">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-6">Services</h4>
          <ul className="space-y-3">
            {['S/PLUS Member', 'Aide & FAQ', 'Suivi de commande', 'Entretien Produit'].map((item) => (
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
            <h4 className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-6">NYFORTEL</h4>
            <ul className="space-y-3">
              {['Services', 'Légal', 'Développement Durable', 'Livraison'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm font-bold uppercase tracking-tight hover:opacity-50 transition-opacity text-zinc-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[10px] font-mono text-zinc-600 mt-12">
            © 2024 NYFORTEL_CLUB LABORATORY. FRANCE.
          </p>
        </div>
      </div>
    </footer>
  );
}
