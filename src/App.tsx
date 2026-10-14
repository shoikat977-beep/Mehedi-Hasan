import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PromoMiniBanners } from './components/PromoMiniBanners';
import { TopCategories } from './components/TopCategories';
import { WeeklyDeals } from './components/WeeklyDeals';
import { BestSellers } from './components/BestSellers';
import { Footer } from './components/Footer';
import { SideDock } from './components/SideDock';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { QuickViewModal } from './components/QuickViewModal';
import { LoginModal } from './components/LoginModal';
import { WishlistModal, CompareModal } from './components/WishlistModal';
import { Check } from 'lucide-react';

const ToastNotification: React.FC = () => {
  const { toastMessage } = useStore();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 bg-[#1e2329] text-white px-4 py-3 rounded-lg shadow-2xl border border-slate-700 flex items-center gap-2.5 text-xs font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="w-5 h-5 rounded-full bg-[#5a9e32] flex items-center justify-center text-white shrink-0">
        <Check className="w-3 h-3" />
      </div>
      <span>{toastMessage}</span>
    </div>
  );
};

const StoreContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      {/* Top utility bar */}
      <TopBar />

      {/* Main search and brand header */}
      <Header />

      {/* Green navigation bar with departments dropdown */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section: I Watch Series 2 + Ultra HD TV + MacBook Pro */}
        <HeroSection />

        {/* 3 Promotional Mini-Banners: Tablet 50% / Christmas Camera 50% / Headphone 30% */}
        <PromoMiniBanners />

        {/* Top Categories This Week */}
        <TopCategories />

        {/* Weekly Deals with live ticking countdown timers and stock progress */}
        <WeeklyDeals />

        {/* Best Seller with tabs, product cards, and iWatch orange showcase */}
        <BestSellers />
      </main>

      {/* Rich e-commerce footer */}
      <Footer />

      {/* Floating Side Utility Dock (Cart, Wishlist, Compare, Search, Scroll Top) */}
      <SideDock />

      {/* Interactive Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <QuickViewModal />
      <LoginModal />
      <WishlistModal />
      <CompareModal />

      {/* Live Toast Notification */}
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <StoreContent />
    </StoreProvider>
  );
}
