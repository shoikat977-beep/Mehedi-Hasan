import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Truck, RefreshCw, CreditCard } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { showToast } = useStore();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      showToast('Thank you for subscribing! Check your inbox for 10% off code.');
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#1e2329] text-slate-300 text-xs mt-16 pt-12 pb-8 border-t-4 border-[#5a9e32]">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Value Propositions Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-slate-700/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5a9e32]/20 text-[#5a9e32] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-wide">Free Delivery</h5>
              <p className="text-slate-400 text-[11px] mt-0.5">On orders over $150.00</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5a9e32]/20 text-[#5a9e32] flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-wide">30-Day Returns</h5>
              <p className="text-slate-400 text-[11px] mt-0.5">Hassle-free guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5a9e32]/20 text-[#5a9e32] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-wide">2-Year Warranty</h5>
              <p className="text-slate-400 text-[11px] mt-0.5">100% genuine electronics</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5a9e32]/20 text-[#5a9e32] flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-wide">Secure Checkout</h5>
              <p className="text-slate-400 text-[11px] mt-0.5">256-bit SSL encryption</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-slate-700/60">
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black text-white font-['Outfit',sans-serif]">
                Avansi
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ffb703] inline-block mb-1" />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Avansi is your trusted destination for cutting-edge electronics, smart wearables, high-fidelity audio gear, and ultrabook computers.
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#5a9e32] shrink-0" />
                <span>742 Evergreen Terrace, San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5a9e32] shrink-0" />
                <a href="tel:0123456789" className="hover:text-white transition-colors">0123-456-789</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5a9e32] shrink-0" />
                <a href="mailto:contact@avansi.com" className="hover:text-white transition-colors">contact@avansi.com</a>
              </div>
            </div>
          </div>

          {/* Quick Categories (2.5 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider">Top Categories</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#top-categories" className="hover:text-white transition-colors">Smartphones</a></li>
              <li><a href="#top-categories" className="hover:text-white transition-colors">TV & Audio</a></li>
              <li><a href="#top-categories" className="hover:text-white transition-colors">Cameras & Lenses</a></li>
              <li><a href="#top-categories" className="hover:text-white transition-colors">Smartwatches</a></li>
              <li><a href="#top-categories" className="hover:text-white transition-colors">Headphones</a></li>
              <li><a href="#weekly-deals" className="hover:text-white transition-colors">Weekly Deals</a></li>
            </ul>
          </div>

          {/* Customer Care (2.5 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider">Customer Care</h5>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => showToast('Order tracking portal')} className="hover:text-white transition-colors">Track Your Order</button></li>
              <li><button onClick={() => showToast('Returns & exchanges policy')} className="hover:text-white transition-colors">Returns & Refunds</button></li>
              <li><button onClick={() => showToast('Shipping guide: Standard 2-4 business days')} className="hover:text-white transition-colors">Shipping Policy</button></li>
              <li><button onClick={() => showToast('Help Center')} className="hover:text-white transition-colors">Help Center & FAQ</button></li>
              <li><button onClick={() => showToast('Privacy and cookies information')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          {/* Newsletter Subscribe (3.5 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider">Join Our Newsletter</h5>
            <p className="text-slate-400 text-xs">
              Subscribe to get special discounts, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex rounded overflow-hidden mt-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address..."
                className="bg-slate-800 text-white placeholder-slate-500 px-3 py-2 text-xs flex-1 border border-slate-700 focus:outline-hidden focus:border-[#5a9e32]"
              />
              <button
                type="submit"
                className="bg-[#5a9e32] hover:bg-[#4b8429] text-white px-4 py-2 text-xs font-bold uppercase transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <span>Join</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright & Payment Icons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 Avansi Electronics Store. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="bg-slate-800 px-2 py-1 rounded text-slate-300 font-semibold font-mono">VISA</span>
            <span className="bg-slate-800 px-2 py-1 rounded text-slate-300 font-semibold font-mono">MC</span>
            <span className="bg-slate-800 px-2 py-1 rounded text-slate-300 font-semibold font-mono">AMEX</span>
            <span className="bg-slate-800 px-2 py-1 rounded text-slate-300 font-semibold font-mono">PAYPAL</span>
            <span className="bg-slate-800 px-2 py-1 rounded text-slate-300 font-semibold font-mono">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
