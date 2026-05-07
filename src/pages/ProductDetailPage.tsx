import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ChevronLeft, ArrowRight, Share2, Info } from 'lucide-react';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <main className="pt-24 min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/collection" className="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest hover:translate-x-[-4px] transition-transform mb-12">
          <ChevronLeft size={16} strokeWidth={3} />
          <span>Back to Grid</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-zinc-100 overflow-hidden">
               <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-zinc-50 overflow-hidden border border-black/5">
                   <img
                    src={`https://picsum.photos/seed/p${i}${product.id}/400/400?grayscale`}
                    alt="Detail"
                    className="w-full h-full object-cover mix-blend-multiply opacity-50 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h1 className="text-6xl md:text-8xl italic font-black leading-none">{product.name}</h1>
                  <span className="text-2xl font-mono">{product.price}</span>
                </div>
                <p className="text-[10px] tracking-widest font-black uppercase text-black/40">{product.category}</p>
              </div>

              <div className="space-y-6">
                <p className="text-xl font-medium leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest">
                    <Info size={14} strokeWidth={3} />
                    <span>Technical Architecture</span>
                  </h4>
                  <ul className="space-y-2 border-t border-black/10 pt-4">
                    {product.technicalSpecs.map((spec, i) => (
                      <li key={i} className="flex items-center space-x-4 text-xs font-bold uppercase tracking-tight">
                        <span className="w-1 h-1 bg-black rounded-full" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="flex items-center space-x-4">
                   {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                     <button key={size} className="flex-1 border-2 border-black/10 py-4 text-xs font-black hover:border-black transition-colors focus:bg-black focus:text-white">
                       {size}
                     </button>
                   ))}
                </div>

                <button className="w-full bg-black text-white py-6 font-black uppercase tracking-[0.2em] hover:opacity-80 transition-opacity flex items-center justify-center space-x-4">
                  <span>Add to Mission</span>
                  <ArrowRight size={20} />
                </button>
                
                <button className="w-full border-2 border-black py-4 font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center space-x-2 hover:bg-black hover:text-white transition-all">
                  <Share2 size={14} />
                  <span>Encrypted Share</span>
                </button>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-black/5 flex justify-between items-center text-[10px] font-mono text-black/40 uppercase tracking-widest">
              <span>REF: 2948-ALPHA-PRO</span>
              <span>DESIGNED IN BEAVERTON, OR</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
