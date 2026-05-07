import React from 'react';
import { motion } from 'motion/react';
import { JOURNAL_ENTRIES } from '../constants';
import { ArrowRight } from 'lucide-react';

export function JournalPage() {
  return (
    <main className="pt-32 pb-40 px-6 bg-zinc-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-32 space-y-8">
          <h1 className="text-8xl md:text-[12rem] italic leading-none text-white/5 absolute left-0 w-full text-center pointer-events-none select-none">EXPEDITION</h1>
          <div className="relative z-10 text-center space-y-6 pt-20">
            <h2 className="text-4xl md:text-6xl italic font-black uppercase tracking-tighter">FIELD NOTES & LOGS</h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Documenting the edge of high-altitude utility.</p>
          </div>
        </header>

        <div className="space-y-40">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <motion.article 
              key={entry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-8 overflow-hidden aspect-[16/9] bg-zinc-900">
                  <img 
                    src={`https://images.unsplash.com/photo-1516589170761-7bf54093c834?q=80&w=1200&auto=format&fit=crop&seed=${entry.id}`}
                    alt={entry.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:col-span-4 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-black bg-white text-black px-2 py-1 uppercase">{entry.category}</span>
                    <span className="text-[10px] font-mono text-zinc-600">{entry.date}</span>
                  </div>
                  <h3 className="text-4xl italic font-black leading-tight group-hover:text-white transition-colors">{entry.title}</h3>
                  <p className="text-zinc-500 font-medium line-clamp-3">
                    {entry.excerpt}
                  </p>
                  <button className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-widest border-b-2 border-white/20 pb-2 group-hover:border-white transition-all">
                    <span>Read Investigation</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-40 text-center py-20 border-t border-white/5">
          <p className="font-mono text-zinc-600 text-[10px] uppercase tracking-[0.5em]">END OF LOG / ARCHIVE 2024</p>
        </div>
      </div>
    </main>
  );
}
