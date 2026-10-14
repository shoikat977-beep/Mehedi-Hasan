import React, { useState, useEffect } from 'react';
import { Star, Heart, Repeat, Eye, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { WEEKLY_DEALS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

export const WeeklyDeals: React.FC = () => {
  const { addToCart, toggleWishlist, isWishlisted, toggleCompare, isCompared, setQuickViewProduct, showToast } = useStore();

  // State to manage live countdown ticking
  const [dealTime1, setDealTime1] = useState({
    days: 133,
    hours: 8,
    mins: 25,
    secs: 38
  });

  const [dealTime2, setDealTime2] = useState({
    days: 161,
    hours: 8,
    mins: 25,
    secs: 38
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDealTime1((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });

      setDealTime2((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTimer = (time: typeof dealTime1) => (
    <div className="grid grid-cols-4 gap-2 pt-4">
      <div className="bg-[#1f2421] text-white text-center py-2 px-1 rounded-xs">
        <span className="block text-base sm:text-lg font-extrabold font-mono leading-none">
          {String(time.days).padStart(2, '0')}
        </span>
        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-1">
          DAYS
        </span>
      </div>
      <div className="bg-[#1f2421] text-white text-center py-2 px-1 rounded-xs">
        <span className="block text-base sm:text-lg font-extrabold font-mono leading-none">
          {String(time.hours).padStart(2, '0')}
        </span>
        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-1">
          HOURS
        </span>
      </div>
      <div className="bg-[#1f2421] text-white text-center py-2 px-1 rounded-xs">
        <span className="block text-base sm:text-lg font-extrabold font-mono leading-none">
          {String(time.mins).padStart(2, '0')}
        </span>
        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-1">
          MINS
        </span>
      </div>
      <div className="bg-[#1f2421] text-white text-center py-2 px-1 rounded-xs">
        <span className="block text-base sm:text-lg font-extrabold font-mono leading-none">
          {String(time.secs).padStart(2, '0')}
        </span>
        <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-1">
          SECS
        </span>
      </div>
    </div>
  );

  return (
    <section id="weekly-deals" className="py-8">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Header with Title and Prev/Next */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
              Weekly Deals
            </h3>
            <div className="absolute -bottom-3.5 left-0 w-20 h-0.5 bg-[#5a9e32]" />
          </div>

          <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
            <button
              onClick={() => showToast('Previous deal cycle')}
              className="px-2 py-1 hover:text-[#5a9e32] flex items-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => showToast('Next deal cycle')}
              className="px-2 py-1 hover:text-[#5a9e32] flex items-center transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2 Deal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WEEKLY_DEALS.map((deal, idx) => {
            const time = idx === 0 ? dealTime1 : dealTime2;
            const soldCount = deal.sold || 0;
            const availableCount = deal.available || 0;
            const totalStock = soldCount + availableCount;
            const progressPercent = totalStock > 0 ? (soldCount / totalStock) * 100 : 30;

            return (
              <div
                key={deal.id}
                className="bg-white border border-slate-200 rounded-xs p-6 shadow-xs hover:border-[#5a9e32]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  {/* Left: Product Image & Badge */}
                  <div className="sm:col-span-5 relative flex items-center justify-center p-3 bg-slate-50 rounded-xs group cursor-pointer" onClick={() => setQuickViewProduct(deal)}>
                    {deal.badge && (
                      <span className="absolute top-2 left-2 bg-[#5a9e32] text-white text-[11px] font-bold px-2 py-0.5 rounded-xs tracking-wide shadow-xs">
                        {deal.badge.text}
                      </span>
                    )}
                    <img
                      src={deal.image}
                      alt={deal.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-44 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Right: Info, Price, Actions */}
                  <div className="sm:col-span-7 flex flex-col justify-between">
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 text-[#ffb703] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#ffb703]" />
                      ))}
                    </div>

                    {/* Title */}
                    <h4
                      onClick={() => setQuickViewProduct(deal)}
                      className="text-sm font-bold text-slate-800 hover:text-[#5a9e32] transition-colors cursor-pointer line-clamp-2 leading-snug"
                    >
                      {deal.name}
                    </h4>

                    {/* Price */}
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-extrabold text-slate-900 font-mono">
                        ${deal.price.toFixed(2)}
                      </span>
                      {deal.originalPrice && (
                        <span className="text-xs text-slate-400 line-through font-mono">
                          ${deal.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Stock status */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium mb-1">
                        <span>Available: <strong className="text-slate-700">{availableCount}</strong></span>
                        <span>Sold: <strong className="text-slate-700">{soldCount}</strong></span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#5a9e32] rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, Math.max(10, progressPercent))}%` }}
                        />
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        onClick={() => addToCart(deal)}
                        className="bg-[#5a9e32] hover:bg-[#4b8429] text-white text-xs font-bold px-4 py-2 rounded-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>ADD TO CART</span>
                      </button>

                      <button
                        onClick={() => toggleWishlist(deal)}
                        className={`p-2 border rounded-xs transition-colors cursor-pointer ${
                          isWishlisted(deal.id)
                            ? 'bg-rose-50 border-rose-300 text-rose-600'
                            : 'border-slate-200 text-slate-500 hover:text-rose-500 hover:border-rose-200'
                        }`}
                        title="Add to Wishlist"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isWishlisted(deal.id) ? 'fill-rose-500' : ''}`} />
                      </button>

                      <button
                        onClick={() => toggleCompare(deal)}
                        className={`p-2 border rounded-xs transition-colors cursor-pointer ${
                          isCompared(deal.id)
                            ? 'bg-blue-50 border-blue-300 text-blue-600'
                            : 'border-slate-200 text-slate-500 hover:text-blue-500 hover:border-blue-200'
                        }`}
                        title="Compare Product"
                      >
                        <Repeat className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setQuickViewProduct(deal)}
                        className="p-2 border border-slate-200 rounded-xs text-slate-500 hover:text-[#5a9e32] hover:border-[#5a9e32] transition-colors cursor-pointer"
                        title="Quick View"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Countdown Timer Bar */}
                {renderTimer(time)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
