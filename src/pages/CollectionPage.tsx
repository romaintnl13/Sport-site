import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export function CollectionPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 space-y-4">
          <h1 className="text-8xl md:text-[10rem] leading-[0.8] tracking-tighter italic">EQUIPMENT</h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <p className="text-xl font-medium max-w-md text-zinc-400">
              High-intensity systems designed for the rigors of elite competition.
            </p>
            <div className="flex space-x-8">
              {['All', 'Tops', 'Bottoms', 'Accessories'].map((cat) => (
                <button key={cat} className="text-[10px] uppercase font-black tracking-widest text-white/40 hover:text-white transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 mix-blend-difference">
                    <span className="text-[8px] tracking-[0.4em] font-black uppercase text-white opacity-40">Series 0.1 / P{index + 1}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xs font-black uppercase tracking-[0.5em] border border-white px-8 py-4">View Specs</span>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl italic font-black group-hover:tracking-wider transition-all">{product.name}</h3>
                    <p className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase mt-1">{product.category}</p>
                  </div>
                  <span className="font-mono text-sm">{product.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
