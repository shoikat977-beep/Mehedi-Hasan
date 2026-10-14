import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ALL_PRODUCTS, heroSmartwatchesImg, bannerUltraHdTvImg, bannerLaptopDeskImg } from '../data/products';

export const HeroSection: React.FC = () => {
  const { setQuickViewProduct, addToCart } = useStore();

  const handleHeroWatchClick = () => {
    const watchProduct = ALL_PRODUCTS.find((p) => p.id === 'hero-watch') || ALL_PRODUCTS[0];
    setQuickViewProduct(watchProduct);
  };

  const handleTvClick = () => {
    const tvProduct = ALL_PRODUCTS.find((p) => p.id === 'hero-tv') || ALL_PRODUCTS[1];
    setQuickViewProduct(tvProduct);
  };

  const handleMacbookClick = () => {
    const macProduct = ALL_PRODUCTS.find((p) => p.id === 'hero-macbook') || ALL_PRODUCTS[2];
    setQuickViewProduct(macProduct);
  };

  return (
    <section className="py-5">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Big Hero Banner: I WATCH SERIES 2 (approx 7 cols) */}
          <div className="lg:col-span-7 bg-[#f2f3f5] rounded-xs p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[460px] border border-slate-200/80 group">
            <div className="relative z-10 max-w-sm">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2 block">
                WATCH & ACCESSORIES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase font-['Outfit',sans-serif] mb-4">
                I WATCH <br />
                <span className="text-slate-900">SERIES 2</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                Lorem khaled ipsum is a major key to success. It's on you how you want to live your life.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleHeroWatchClick}
                  className="bg-[#ffb703] hover:bg-[#efa700] text-slate-950 font-bold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition-all transform hover:translate-y-[-2px] shadow-sm hover:shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Shop now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    const watch = ALL_PRODUCTS.find((p) => p.id === 'hero-watch') || ALL_PRODUCTS[0];
                    addToCart(watch);
                  }}
                  className="bg-white/80 hover:bg-white text-slate-800 p-3 rounded-full border border-slate-300 transition-colors cursor-pointer"
                  title="Quick Add to Cart"
                >
                  <ShoppingCart className="w-4 h-4 text-[#5a9e32]" />
                </button>
              </div>
            </div>

            {/* Smartwatches Hero Image */}
            <div className="absolute right-[-10px] bottom-0 w-3/5 sm:w-1/2 h-[80%] pointer-events-none flex items-end justify-end">
              <img
                src={heroSmartwatchesImg}
                alt="I Watch Series 2"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Stacked Banners (approx 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Top Right: ULTRA HD TV Banner */}
            <div className="flex-1 bg-gradient-to-r from-[#0c182a] via-[#102038] to-[#152a4a] text-white rounded-xs p-6 sm:p-7 relative overflow-hidden flex flex-col justify-center min-h-[215px] border border-slate-800 group">
              <div className="relative z-10 max-w-[55%]">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2 font-['Outfit',sans-serif]">
                  ULTRA HD TV
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mb-5 leading-relaxed">
                  Snap up huge savings during the weekend Samsung sale
                </p>
                <button
                  onClick={handleTvClick}
                  className="bg-[#5a9e32] hover:bg-[#4a8428] text-white text-[11px] font-bold px-5 py-2 rounded-xs uppercase tracking-wider transition-all inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Shop now</span>
                </button>
              </div>

              {/* TV Image */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-48 sm:w-52 h-36 flex items-center justify-center">
                <img
                  src={bannerUltraHdTvImg}
                  alt="Ultra HD TV"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Bottom Right: MACBOOK PRO Banner */}
            <div className="flex-1 bg-[#ede8e1] rounded-xs p-6 sm:p-7 relative overflow-hidden flex flex-col justify-center min-h-[215px] border border-stone-300 group">
              <div className="relative z-10 max-w-[55%]">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-stone-900 mb-2 font-['Outfit',sans-serif]">
                  MACBOOK PRO
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 mb-5 leading-relaxed">
                  Snap up huge savings during the weekend Macbook sale
                </p>
                <button
                  onClick={handleMacbookClick}
                  className="bg-[#5a9e32] hover:bg-[#4a8428] text-white text-[11px] font-bold px-5 py-2 rounded-xs uppercase tracking-wider transition-all inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Shop now</span>
                </button>
              </div>

              {/* MacBook Image */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-48 sm:w-52 h-36 flex items-center justify-center">
                <img
                  src={bannerLaptopDeskImg}
                  alt="MacBook Pro"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
