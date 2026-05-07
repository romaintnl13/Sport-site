import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end px-6 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/nike-pro-hero/1920/1080?grayscale" 
            alt="Elite Athlete" 
            className="w-full h-full object-cover opacity-60 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 1.5, rotateX: 45 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[18vw] leading-[0.75] italic tracking-[-0.05em]">
              NIKE<br/>PRO
            </h1>
          </motion.div>

          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between space-y-8 md:space-y-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-md"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Innovation Pillar 01</p>
              <p className="text-xl font-medium leading-tight">
                Introducing the AeroAdapt Ultra 2.0 system. Dynamic temperature regulation for the 1%.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link 
                to="/collection" 
                className="group flex items-center space-x-4 bg-white text-black px-8 py-5 font-black uppercase text-sm tracking-widest hover:bg-zinc-200 transition-all"
              >
                <span>Explore Series</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Innovation */}
      <section className="bg-white text-black py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-7xl md:text-9xl italic leading-[0.8]">ZERO<br/>WEIGHT</h2>
              <p className="text-lg font-medium leading-relaxed max-w-sm">
                Engineered with molecular-bonded fibers, creating a high-performance shell that weighs less than a single breath of air.
              </p>
              <div className="pt-8 border-t border-black/10">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] tracking-widest uppercase">Research File 4022</span>
                  <Link to="/journal/1" className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1">View Lab Specs</Link>
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden">
               <img 
                src="https://picsum.photos/seed/tech/800/1000?grayscale" 
                alt="Tech fabric" 
                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-1000 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 right-8 mix-blend-difference text-white">
                <span className="text-[10vw] font-black italic mix-blend-overlay opacity-20">01</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
