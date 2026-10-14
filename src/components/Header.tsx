import React, { useState } from 'react';
import { Search, Headphones, ShoppingBag, ChevronDown } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const CATEGORIES_LIST = [
  'All Categories',
  'Smartphones',
  'TV & Audio',
  'Camera',
  'Smartwatch',
  'Headphone',
  'Laptops & Ultrabooks',
  'Gaming Consoles'
];

export const Header: React.FC = () => {
  const {
    cartCount,
    cartTotal,
    setIsCartDrawerOpen,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    showToast
  } = useStore();

  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    if (localSearch.trim()) {
      showToast(`Searching for "${localSearch}" in ${selectedCategory}`);
      const el = document.getElementById('best-sellers');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-[1240px] mx-auto px-4 py-5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <a href="#" className="flex items-center gap-1 group">
            <span className="text-3xl font-extrabold tracking-tight text-[#5a9e32] font-['Outfit',sans-serif]">
              Avansi
            </span>
            <span className="w-2 h-2 rounded-full bg-[#f5a623] inline-block mb-1 group-hover:scale-125 transition-transform" />
          </a>
        </div>

        {/* Search Bar with Category Dropdown */}
        <div className="flex-1 max-w-2xl mx-4 hidden md:block">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border-2 border-[#5a9e32] rounded-full overflow-hidden bg-white shadow-xs focus-within:ring-2 focus-within:ring-[#5a9e32]/20 transition-all"
          >
            {/* Category Dropdown */}
            <div className="relative border-r border-slate-200">
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:text-[#5a9e32] whitespace-nowrap"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white border border-slate-200 rounded-lg shadow-xl py-2 w-52 z-50 text-slate-700">
                  {CATEGORIES_LIST.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCategoryDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-1.5 text-xs hover:bg-[#5a9e32]/10 hover:text-[#5a9e32] ${
                        selectedCategory === cat ? 'font-bold text-[#5a9e32] bg-slate-50' : ''
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <input
              type="text"
              placeholder="Keyword here..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="flex-1 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden bg-transparent"
            />

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#5a9e32] hover:bg-[#4d8629] text-white px-6 py-2.5 text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </button>
          </form>
        </div>

        {/* Right Info: Phone Contact & Shopping Cart */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Call Us Now */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600">
              <Headphones className="w-5 h-5 text-[#5a9e32]" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium leading-tight">
                CALL US NOW
              </p>
              <a
                href="tel:0123456789"
                className="text-sm font-bold text-slate-900 hover:text-[#5a9e32] transition-colors"
              >
                0123-456-789
              </a>
            </div>
          </div>

          {/* Cart Icon & Subtotal */}
          <button
            onClick={() => setIsCartDrawerOpen(true)}
            className="flex items-center gap-3 group text-left cursor-pointer p-1 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#5a9e32]/10 group-hover:text-[#5a9e32] transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="absolute -top-1 -right-1 bg-[#ffb703] text-black font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs border border-white">
                {cartCount}
              </span>
            </div>

            <div>
              <p className="text-xs text-slate-500 font-medium leading-none">
                My cart
              </p>
              <p className="text-sm font-bold text-slate-900 font-mono mt-0.5 group-hover:text-[#5a9e32] transition-colors">
                ${cartTotal.toFixed(2)}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Search input */}
      <div className="md:hidden px-4 pb-3">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center border border-[#5a9e32] rounded-full overflow-hidden bg-white shadow-xs"
        >
          <input
            type="text"
            placeholder="Search electronics..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="flex-1 px-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden"
          />
          <button
            type="submit"
            className="bg-[#5a9e32] text-white px-4 py-2 text-xs font-semibold flex items-center gap-1"
          >
            <Search className="w-3 h-3" />
            <span>Search</span>
          </button>
        </form>
      </div>
    </header>
  );
};
