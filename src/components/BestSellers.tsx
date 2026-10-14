import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { BEST_SELLERS, heroSmartwatchesImg, ALL_PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

export const BestSellers: React.FC = () => {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
    setQuickViewProduct,
    showToast,
    selectedCategory,
    searchQuery
  } = useStore();

  const [activeTab, setActiveTab] = useState<'all' | 'laptop' | 'mobile' | 'watches'>('laptop');
  const [mostViewedIndex, setMostViewedIndex] = useState(0);

  // Filter products by tab, search query, or global category
  let displayedProducts = BEST_SELLERS;

  if (activeTab === 'laptop') {
    displayedProducts = BEST_SELLERS.filter((p) => p.tabCategory === 'laptop' || !p.tabCategory);
  } else if (activeTab === 'mobile') {
    displayedProducts = BEST_SELLERS.filter((p) => p.tabCategory === 'mobile');
  } else if (activeTab === 'watches') {
    displayedProducts = BEST_SELLERS.filter((p) => p.tabCategory === 'watches');
  }

  // If search query is entered, match name
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    displayedProducts = ALL_PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }

  // Ensure we show up to 5 items in the main grid
  const gridProducts = displayedProducts.slice(0, 5);

  const handleNextMostViewed = () => {
    setMostViewedIndex((prev) => (prev + 1) % 3);
    showToast('Browsing most viewed trending deals');
  };

  const handlePrevMostViewed = () => {
    setMostViewedIndex((prev) => (prev === 0 ? 2 : prev - 1));
    showToast('Browsing most viewed trending deals');
  };

  const handleIwatchBannerClick = () => {
    const watch = ALL_PRODUCTS.find((p) => p.id === 'hero-watch') || ALL_PRODUCTS[0];
    setQuickViewProduct({
      ...watch,
      name: 'I Watch Series 2 Edition - Rose Gold & Onyx',
      price: 499.89,
      originalPrice: 599.00
    });
  };

  return (
    <section id="best-sellers" className="py-8">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Section Header with Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-3 mb-6 gap-4">
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
              Best Seller
            </h3>
            <div className="absolute -bottom-3.5 left-0 w-16 h-0.5 bg-[#5a9e32]" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('laptop')}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                activeTab === 'laptop'
                  ? 'bg-[#5a9e32] text-white border-[#5a9e32]'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#5a9e32] hover:text-[#5a9e32]'
              }`}
            >
              LAPTOP & NOTEBOOK
            </button>

            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                activeTab === 'mobile'
                  ? 'bg-[#5a9e32] text-white border-[#5a9e32]'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#5a9e32] hover:text-[#5a9e32]'
              }`}
            >
              MOBILE & ACCESSORIES
            </button>

            <button
              onClick={() => setActiveTab('watches')}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                activeTab === 'watches'
                  ? 'bg-[#5a9e32] text-white border-[#5a9e32]'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#5a9e32] hover:text-[#5a9e32]'
              }`}
            >
              WATCHES
            </button>
          </div>
        </div>

        {/* Main Content: Products Columns + Right iWatch Promo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Products Grid (approx 9.5 cols) */}
          <div className="lg:col-span-9">
            {gridProducts.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-xs p-10 text-center text-slate-500">
                <p>No products found matching your filter.</p>
                <button
                  onClick={() => setActiveTab('laptop')}
                  className="mt-3 text-xs text-[#5a9e32] font-semibold underline"
                >
                  Reset filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {gridProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-slate-200 rounded-xs p-3.5 flex flex-col justify-between group hover:border-[#5a9e32] hover:shadow-md transition-all duration-300 relative"
                  >
                    {/* Badge */}
                    {product.badge && (
                      <span
                        className={`absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded-xs tracking-wider z-10 ${
                          product.badge.type === 'new'
                            ? 'bg-[#0077b6] text-white'
                            : product.badge.type === 'hot'
                            ? 'bg-[#e63946] text-white'
                            : 'bg-[#5a9e32] text-white'
                        }`}
                      >
                        {product.badge.text}
                      </span>
                    )}

                    {/* Image Area */}
                    <div
                      onClick={() => setQuickViewProduct(product)}
                      className="relative h-32 sm:h-36 flex items-center justify-center p-2 cursor-pointer overflow-hidden"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                      />

                      {/* Hover Action Overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 pointer-events-none">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                          className="w-8 h-8 bg-white text-slate-800 rounded-full flex items-center justify-center shadow-md hover:bg-[#5a9e32] hover:text-white transition-colors pointer-events-auto cursor-pointer"
                          title="Add to Cart"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setQuickViewProduct(product);
                          }}
                          className="w-8 h-8 bg-white text-slate-800 rounded-full flex items-center justify-center shadow-md hover:bg-[#5a9e32] hover:text-white transition-colors pointer-events-auto cursor-pointer"
                          title="Quick View"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(product);
                          }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors pointer-events-auto cursor-pointer ${
                            isWishlisted(product.id)
                              ? 'bg-rose-500 text-white'
                              : 'bg-white text-slate-800 hover:bg-rose-500 hover:text-white'
                          }`}
                          title="Wishlist"
                        >
                          <Heart className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mt-3 pt-2 border-t border-slate-100 flex flex-col items-center text-center flex-1 justify-between">
                      {/* Rating */}
                      <div className="flex items-center gap-0.5 text-[#ffb703] mb-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#ffb703]" />
                        ))}
                      </div>

                      {/* Product Name */}
                      <h5
                        onClick={() => setQuickViewProduct(product)}
                        className="text-xs font-semibold text-slate-800 hover:text-[#5a9e32] transition-colors cursor-pointer line-clamp-2 leading-snug mb-2"
                        title={product.name}
                      >
                        {product.name}
                      </h5>

                      {/* Price */}
                      <div className="flex items-center justify-center gap-1.5 font-mono">
                        <span className="text-sm font-bold text-slate-900">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[11px] text-slate-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: iWatch Promotional Block & Most Viewed (approx 2.5-3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Orange iWatch Showcase Banner */}
            <div
              onClick={handleIwatchBannerClick}
              className="bg-[#e76f28] hover:bg-[#db621c] text-white rounded-xs p-6 flex flex-col justify-between text-center relative overflow-hidden group cursor-pointer transition-all duration-300 min-h-[310px] shadow-sm"
            >
              <div>
                <h4 className="text-lg font-black uppercase tracking-widest font-['Outfit',sans-serif]">
                  IWATCH
                </h4>
                <p className="text-[11px] text-orange-100 font-medium mt-0.5">
                  To wear it is to love it
                </p>
                <div className="text-2xl font-black font-mono mt-2 text-white">
                  $499.89
                </div>
              </div>

              {/* Dual Watch Image Visual */}
              <div className="my-3 flex items-center justify-center h-36">
                <img
                  src={heroSmartwatchesImg}
                  alt="IWatch Promo"
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="pt-2">
                <span className="inline-block bg-white text-[#e76f28] group-hover:bg-slate-100 text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-xs">
                  Discover Series
                </span>
              </div>
            </div>

            {/* Most Viewed Mini Bar */}
            <div className="bg-white border border-slate-200 rounded-xs p-3 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-tight">
                Most Viewed
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrevMostViewed}
                  className="p-1 text-slate-400 hover:text-[#5a9e32] transition-colors rounded cursor-pointer"
                  title="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextMostViewed}
                  className="p-1 text-slate-400 hover:text-[#5a9e32] transition-colors rounded cursor-pointer"
                  title="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
