import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Wind, Zap } from 'lucide-react';
import { PRODUCTS } from '../constants';

export function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-[120px]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col justify-end px-6 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538370621607-4919ce7889b3?q=80&w=1920&auto=format&fit=crop&grayscale=true" 
            alt="Elite Performance" 
            className="w-full h-full object-cover opacity-90 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/60 mb-4">Focus / GRVL Concept</h2>
              <h1 className="text-4xl md:text-7xl italic font-black uppercase leading-[0.8] mb-6">
                Allez plus loin<br/>que l’asphalte.
              </h1>
              <p className="text-lg md:text-xl font-medium max-w-xl text-zinc-300 mb-12">
                Libérez la puissance des plaques carbone sur les sentiers les plus sauvages. L'ingénierie alpine au service de la vitesse pure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/product/grvl-concept" 
                className="group inline-flex items-center space-x-6 bg-white text-black px-10 py-6 font-black uppercase text-sm tracking-widest hover:bg-zinc-200 transition-all"
              >
                <span>Découvrir maintenant</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Quick Access */}
      <section className="bg-zinc-900 py-10 px-6 border-y border-white/5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex space-x-12 whitespace-nowrap">
          {['Gravel running', 'Trail running', 'Course à pied', 'Randonnée', 'Sportstyle'].map((cat) => (
            <Link 
              key={cat} 
              to="/collection" 
              className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Modern Category Grid - Inspired by UVU aesthetic */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Gravel running', 
                img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop&grayscale=true',
                desc: 'Allez plus loin que l’asphalte, avec la puissance des plaques carbone.'
              },
              { 
                name: 'Trail running', 
                img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop&grayscale=true',
                desc: 'Liberté absolue sur les sentiers les plus techniques.'
              },
              { 
                name: 'Course à pied', 
                img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop&grayscale=true',
                desc: 'Performance urbaine redéfinie pour la vitesse pure.'
              },
              { 
                name: 'Randonnée', 
                img: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop&grayscale=true',
                desc: 'Dominez les sommets avec un équipement sans compromis.'
              }
            ].map((cat, i) => (
              <Link key={cat.name} to="/collection" className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{cat.name}</h3>
                </div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs font-medium text-white/70 mb-4">{cat.desc}</p>
                  <span className="text-[10px] font-black uppercase tracking-widest border-b border-white pb-1">Découvrir</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banners - SS26 Quest 5 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
        <div className="relative aspect-square flex flex-col justify-end p-12 overflow-hidden group border-r border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1544274433-07ec760882ef?q=80&w=1200&auto=format&fit=crop&grayscale=true" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            alt="Quest 5"
          />
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">SS26-HC-D-Quest 5 Silhouette</span>
            <h2 className="text-5xl italic font-black uppercase leading-none">Votre chaussure de<br/>randonnée incontournable</h2>
            <p className="text-sm font-medium text-zinc-300">Conçue pour tenir la distance sur les sommets les plus rudes.</p>
            <Link to="/collection" className="inline-block text-[10px] font-black uppercase tracking-widest border-b-2 border-white pb-1 group-hover:tracking-[0.2em] transition-all">Découvrir maintenant</Link>
          </div>
        </div>

        <div className="relative aspect-square flex flex-col justify-end p-12 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1516589170761-7bf54093c834?q=80&w=1200&auto=format&fit=crop&grayscale=true" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            alt="Pink Capsule"
          />
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">SS26-HC-D-PINK CAPSULE V2</span>
            <h2 className="text-5xl italic font-black uppercase leading-none">Capsule Rose</h2>
            <p className="text-sm font-medium text-zinc-300">Des icônes réimaginées avec élégance et douceur.</p>
            <Link to="/collection" className="inline-block text-[10px] font-black uppercase tracking-widest border-b-2 border-white pb-1 group-hover:tracking-[0.2em] transition-all">Découvrir maintenant</Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Grid */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-6xl md:text-8xl italic font-black uppercase tracking-tighter leading-none">Nos meilleures<br/>ventes</h2>
            <Link to="/collection" className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:tracking-widest transition-all">Voir tout</Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {PRODUCTS.slice(0, 4).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group space-y-6">
                <div className="aspect-[3/4] bg-zinc-100 overflow-hidden relative">
                  <img src={product.imageUrl} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                  {product.isMemberExclusive && (
                    <div className="absolute top-4 left-4 bg-black text-white text-[8px] font-black uppercase px-2 py-1 tracking-widest">
                      Exclusivité membres
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg italic font-black uppercase">{product.name}</h3>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    <span>{product.category}</span>
                    <span className="text-black font-mono">{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most Searched Categories - Simple List */}
      <section className="py-20 px-6 bg-white text-black border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 opacity-40">Catégories les plus recherchées</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4">
            {[
              'Chaussures de randonnée pour homme',
              'Chaussures de running pour homme',
              'Chaussures de trail running pour homme',
              'Chaussures de randonnée pour femme',
              'Chaussures de running pour femme',
              'Chaussures de trail pour femme',
              'Chaussures de ski alpin',
              'Vêtements de ski alpin',
              'Chaussures de ski de fond',
              'Sacs et housses pour la randonnée',
              'Vêtements de randonnée',
              'Chaussures de randonnée',
              'Sacs et sacs à dos de running',
              'Vêtements de course à pied',
              'Chaussures de course à pied',
              'Chaussures de snowboard',
              'Snowboards',
              'Sacs de running',
              'Vêtements de trail',
              'Chaussures de trail'
            ].map((cat) => (
              <Link key={cat} to="/collection" className="text-xs font-bold uppercase tracking-tight hover:underline transition-all">
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* The Lab / Performance Section */}
      <section className="py-40 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=1200&auto=format&fit=crop&grayscale=true" 
            className="w-full h-full object-cover"
            alt="Technical Detail"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-7xl md:text-9xl italic font-black uppercase tracking-tighter leading-[0.8]">The<br/>Laboratory</h2>
              <p className="text-xl font-medium text-zinc-400 max-w-sm leading-relaxed">
                Là où la science rencontre le bitume. Nous testons nos limites pour que vous puissiez repousser les vôtres. Rejoignez le club.
              </p>
              <div className="flex space-x-6">
                <button className="bg-white text-black px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all">
                  Voir les tests
                </button>
                <button className="border border-white/20 px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                  Nos athlètes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="bg-zinc-950 py-40 px-6 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-6xl italic font-black uppercase tracking-tighter">Devenez membre</h2>
          <p className="text-lg text-zinc-400 font-medium leading-relaxed">
            Les membres S/PLUS bénéficient de la livraison gratuite, de récompenses spéciales, d’accès à des évènements et plus encore. Rejoignez le programme, c’est 100 % gratuit.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="w-full md:w-auto bg-white text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-zinc-300 transition-colors">
              Se connecter
            </button>
            <button className="w-full md:w-auto border-2 border-white/20 px-12 py-5 font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
