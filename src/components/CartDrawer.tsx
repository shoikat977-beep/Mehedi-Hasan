import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartCount,
    cartTotal,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    removeFromCart,
    updateQuantity,
    setIsCheckoutOpen
  } = useStore();

  if (!isCartDrawerOpen) return null;

  const freeShippingThreshold = 150;
  const progressToFreeShipping = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const handleCheckoutClick = () => {
    setIsCartDrawerOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartDrawerOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#5a9e32]" />
              <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                Your Shopping Bag
              </h3>
              <span className="text-xs bg-[#5a9e32]/15 text-[#5a9e32] font-extrabold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </div>

            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-amber-50/70 p-3.5 border-b border-amber-100 text-xs">
            {remainingForFreeShipping > 0 ? (
              <p className="text-amber-900 font-medium">
                Add <span className="font-bold text-amber-800 font-mono">${remainingForFreeShipping.toFixed(2)}</span> more to unlock <strong className="text-[#5a9e32]">FREE Delivery!</strong>
              </p>
            ) : (
              <p className="text-[#5a9e32] font-bold">
                🎉 Congratulations! You have unlocked FREE Express Shipping!
              </p>
            )}
            <div className="w-full bg-amber-200/60 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#5a9e32] h-full rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-800">Your cart is empty</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Discover electronics deals on laptops, smartwatches, cameras, and audio gear.
                </p>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="mt-5 bg-[#5a9e32] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xs hover:bg-[#4b8429] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4 items-center">
                  <div className="w-18 h-18 bg-slate-50 rounded border border-slate-200 p-1 shrink-0 flex items-center justify-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-slate-800 truncate" title={item.product.name}>
                      {item.product.name}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.product.category}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-bold text-slate-900 font-mono">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>

                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-slate-200 rounded-xs overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="px-2 py-1 text-slate-500 hover:bg-slate-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold font-mono text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="px-2 py-1 text-slate-500 hover:bg-slate-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-slate-400 hover:text-rose-500 p-1.5 rounded transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Totals and CTA */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium text-slate-800">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-mono font-medium text-slate-800">
                    {cartTotal >= freeShippingThreshold ? 'FREE' : '$9.99'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Due</span>
                  <span className="font-mono text-lg text-[#5a9e32]">
                    ${(cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 9.99)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckoutClick}
                className="w-full bg-[#5a9e32] hover:bg-[#4b8429] text-white py-3 px-4 rounded-xs text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 256-Bit SSL Encrypted & Protected
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
