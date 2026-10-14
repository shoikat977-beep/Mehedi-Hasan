import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, DollarSign } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartTotal, clearCart } = useStore();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '555-019-2834',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    paymentMethod: 'card'
  });
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const freeShipping = cartTotal >= 150;
  const shippingFee = freeShipping ? 0 : 9.99;
  const grandTotal = cartTotal + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = 'AVS-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedOrder);
    setStep('success');
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#5a9e32]" />
            <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
              {step === 'form' ? 'Express Secure Checkout' : 'Order Confirmed!'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Quick Order Review */}
            <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs">
              <div className="flex justify-between font-semibold text-slate-700 mb-2">
                <span>Items in Order ({cart.length})</span>
                <span className="font-mono">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 mb-2">
                <span>Shipping ({freeShipping ? 'Free Standard' : 'Express Delivery'})</span>
                <span className="font-mono">{freeShipping ? 'FREE' : '$9.99'}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-slate-200 text-sm">
                <span>Order Total</span>
                <span className="font-mono text-[#5a9e32]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Shipping Information */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#5a9e32]" />
                <span>1. Shipping Details</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-slate-600 font-medium mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#5a9e32]" />
                <span>2. Payment Option</span>
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <label
                  className={`border rounded p-3 text-center cursor-pointer transition-all ${
                    formData.paymentMethod === 'card'
                      ? 'border-[#5a9e32] bg-[#5a9e32]/5 text-[#5a9e32] font-bold'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className="sr-only"
                  />
                  <CreditCard className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs block">Card</span>
                </label>

                <label
                  className={`border rounded p-3 text-center cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'border-[#5a9e32] bg-[#5a9e32]/5 text-[#5a9e32] font-bold'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className="sr-only"
                  />
                  <DollarSign className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs block">Cash On Deliv.</span>
                </label>

                <label
                  className={`border rounded p-3 text-center cursor-pointer transition-all ${
                    formData.paymentMethod === 'paypal'
                      ? 'border-[#5a9e32] bg-[#5a9e32]/5 text-[#5a9e32] font-bold'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
                    className="sr-only"
                  />
                  <ShieldCheck className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs block">PayPal</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#5a9e32] hover:bg-[#4b8429] text-white py-3 px-6 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Place Order (${grandTotal.toFixed(2)})
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#5a9e32] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">
              Thank You for Your Order!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your order <strong className="font-mono text-slate-900">{orderNumber}</strong> has been received and is being prepared for immediate dispatch.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-left max-w-sm mx-auto space-y-1">
              <p><strong>Customer:</strong> {formData.name}</p>
              <p><strong>Shipping to:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zip}</p>
              <p><strong>Confirmation sent to:</strong> {formData.email}</p>
              <p><strong>Status:</strong> Preparing for Carrier Pickup</p>
            </div>
            <button
              onClick={handleClose}
              className="bg-[#5a9e32] hover:bg-[#4b8429] text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
