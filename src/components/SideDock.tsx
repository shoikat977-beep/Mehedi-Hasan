import React from 'react';
import { ShoppingBag, Heart, Repeat, Search, ChevronUp } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const SideDock: React.FC = () => {
  const {
    cartCount,
    setIsCartDrawerOpen,
    wishlist,
    setIsWishlistOpen,
    compareList,
    setIsCompareOpen,
    showToast
  } = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const focusSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Search bar ready');
  };

  return (
    <aside aria-label="Quick Actions" className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col bg-[#5a9e32] rounded-l-md shadow-xl overflow-hidden divide-y divide-[#4c872a] text-white">
      {/* Cart Quick Button */}
      <button
        onClick={() => setIsCartDrawerOpen(true)}
        className="p-3 hover:bg-[#437725] transition-colors relative flex items-center justify-center cursor-pointer group"
        title="Open Cart"
      >
        <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
        {cartCount > 0 && (
          <span className="absolute top-1.5 right-1.5 bg-[#ffb703] text-slate-950 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
            {cartCount}
          </span>
        )}
      </button>

      {/* Wishlist Quick Button */}
      <button
        onClick={() => setIsWishlistOpen(true)}
        className="p-3 hover:bg-[#437725] transition-colors relative flex items-center justify-center cursor-pointer group"
        title="Wishlist"
      >
        <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        {wishlist.length > 0 && (
          <span className="absolute top-1.5 right-1.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
            {wishlist.length}
          </span>
        )}
      </button>

      {/* Compare Quick Button */}
      <button
        onClick={() => setIsCompareOpen(true)}
        className="p-3 hover:bg-[#437725] transition-colors relative flex items-center justify-center cursor-pointer group"
        title="Compare Products"
      >
        <Repeat className="w-5 h-5 group-hover:scale-110 transition-transform" />
        {compareList.length > 0 && (
          <span className="absolute top-1.5 right-1.5 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
            {compareList.length}
          </span>
        )}
      </button>

      {/* Search Quick Button */}
      <button
        onClick={focusSearch}
        className="p-3 hover:bg-[#437725] transition-colors flex items-center justify-center cursor-pointer group"
        title="Quick Search"
      >
        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="p-3 hover:bg-[#437725] transition-colors flex items-center justify-center cursor-pointer group"
        title="Scroll to Top"
      >
        <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    </aside>
  );
};
