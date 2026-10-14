import React, { useState } from 'react';
import { X, Star, Heart, Repeat, ShoppingCart, Check, Shield, Truck } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isWishlisted,
    toggleCompare,
    isCompared
  } = useStore();

  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => {
            setQuickViewProduct(null);
            setQuantity(1);
          }}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="p-8 bg-slate-50 flex items-center justify-center relative border-r border-slate-100">
            {quickViewProduct.badge && (
              <span className="absolute top-4 left-4 bg-[#5a9e32] text-white text-xs font-bold px-2.5 py-1 rounded-xs uppercase tracking-wide shadow-xs">
                {quickViewProduct.badge.text}
              </span>
            )}
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              referrerPolicy="no-referrer"
              className="max-h-72 max-w-full object-contain drop-shadow-md"
            />
          </div>

          {/* Right: Product Details & Purchase Form */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#5a9e32] uppercase tracking-wider">
                {quickViewProduct.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 leading-snug font-['Outfit',sans-serif]">
                {quickViewProduct.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-[#ffb703]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#ffb703]" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  ({quickViewProduct.reviewsCount || 18} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-black text-slate-900 font-mono">
                  ${quickViewProduct.price.toFixed(2)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-slate-400 line-through font-mono">
                    ${quickViewProduct.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" /> In Stock
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Tech Specs if available */}
              {quickViewProduct.specs && (
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs">
                  {Object.entries(quickViewProduct.specs).slice(0, 3).map(([k, v]) => (
                    <div key={k} className="flex justify-between text-slate-600">
                      <span className="text-slate-400">{k}:</span>
                      <span className="font-medium text-slate-800">{v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-slate-300 rounded-xs overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 font-mono text-sm font-bold text-slate-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#5a9e32] hover:bg-[#4b8429] text-white py-2.5 px-4 rounded-xs text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>ADD TO CART</span>
                </button>
              </div>

              {/* Secondary actions: Wishlist & Compare */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <button
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className="flex items-center gap-1.5 hover:text-rose-600 transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted(quickViewProduct.id) ? 'fill-rose-500 text-rose-500' : ''
                    }`}
                  />
                  <span>
                    {isWishlisted(quickViewProduct.id) ? 'Saved in Wishlist' : 'Add to Wishlist'}
                  </span>
                </button>

                <button
                  onClick={() => toggleCompare(quickViewProduct)}
                  className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                >
                  <Repeat className="w-4 h-4" />
                  <span>
                    {isCompared(quickViewProduct.id) ? 'In Compare List' : 'Compare Product'}
                  </span>
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-around text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#5a9e32]" /> Express Shipping
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#5a9e32]" /> 2-Year Warranty
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
