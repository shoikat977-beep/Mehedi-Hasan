import React from 'react';
import { X, Heart, ShoppingCart, Trash2, Repeat } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const WishlistModal: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setQuickViewProduct
  } = useStore();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
              Saved Wishlist ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 max-h-96 overflow-y-auto divide-y divide-slate-100">
          {wishlist.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              <Heart className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium">Your wishlist is currently empty.</p>
              <p className="text-xs text-slate-400 mt-1">
                Click the heart icon on any electronic gadget to save it for later.
              </p>
            </div>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="py-3 flex items-center gap-3">
                <div
                  onClick={() => {
                    setQuickViewProduct(item);
                    setIsWishlistOpen(false);
                  }}
                  className="w-14 h-14 bg-slate-50 border border-slate-200 rounded p-1 shrink-0 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4
                    onClick={() => {
                      setQuickViewProduct(item);
                      setIsWishlistOpen(false);
                    }}
                    className="text-xs font-bold text-slate-800 truncate hover:text-[#5a9e32] cursor-pointer"
                  >
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono font-bold text-slate-900 mt-0.5">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => addToCart(item)}
                    className="p-2 bg-[#5a9e32] text-white rounded hover:bg-[#4b8429] transition-colors"
                    title="Move to Cart"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="p-2 text-slate-400 hover:text-rose-500 rounded transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export const CompareModal: React.FC = () => {
  const {
    compareList,
    isCompareOpen,
    setIsCompareOpen,
    toggleCompare,
    addToCart
  } = useStore();

  if (!isCompareOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Repeat className="w-5 h-5 text-blue-500" />
            <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
              Compare Products ({compareList.length}/4)
            </h3>
          </div>
          <button
            onClick={() => setIsCompareOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {compareList.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              <Repeat className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium">No products selected for comparison.</p>
              <p className="text-xs text-slate-400 mt-1">
                Click the compare icon on product cards to view technical side-by-side comparisons.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {compareList.map((item) => (
                <div key={item.id} className="border border-slate-200 rounded p-3 flex flex-col justify-between text-center relative">
                  <button
                    onClick={() => toggleCompare(item)}
                    className="absolute top-2 right-2 text-slate-400 hover:text-rose-500"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <div className="h-28 flex items-center justify-center p-2 mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-2">{item.name}</h4>
                  <p className="text-sm font-mono font-bold text-[#5a9e32] my-2">${item.price.toFixed(2)}</p>
                  <p className="text-[11px] text-slate-500 mb-3">{item.category}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-[#5a9e32] hover:bg-[#4b8429] text-white text-[11px] font-bold py-1.5 rounded uppercase"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
