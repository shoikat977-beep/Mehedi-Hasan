import React, { useState } from 'react';
import { Mail, MapPin, ChevronDown, LogIn, User, Sparkles, HelpCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const TopBar: React.FC = () => {
  const { user, setIsLoginOpen, showToast } = useStore();
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <div className="bg-[#f5f5f5] text-slate-600 text-xs border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-y-2">
        {/* Left items */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:contact@avansi.com"
            className="flex items-center gap-1.5 hover:text-[#5a9e32] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>contact@avansi.com</span>
          </a>

          <button
            onClick={() => {
              const el = document.getElementById('weekly-deals');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else showToast('Browsing Daily Deals');
            }}
            className="flex items-center gap-1 hover:text-[#5a9e32] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Daily Deals</span>
          </button>

          <button
            onClick={() => showToast('Avansi 24/7 Support: support@avansi.com')}
            className="flex items-center gap-1 hover:text-[#5a9e32] transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Help & Contact</span>
          </button>
        </div>

        {/* Right items */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => showToast('Avansi Flagship Store: 742 Evergreen Terrace, San Francisco, CA')}
            className="flex items-center gap-1.5 hover:text-[#5a9e32] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Store Locator</span>
          </button>

          <button
            onClick={() => showToast('Showing recent order history')}
            className="hover:text-[#5a9e32] transition-colors"
          >
            Order History
          </button>

          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setCurrencyOpen(!currencyOpen);
                setLanguageOpen(false);
              }}
              className="flex items-center gap-1 hover:text-[#5a9e32] transition-colors"
            >
              <span>{currency === 'USD' ? '$ US Dollar' : currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {currencyOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded shadow-md z-50 py-1 w-28 text-slate-700">
                {['$ US Dollar', '€ Euro', '£ Pound', '¥ Yen'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr.split(' ')[1] || curr);
                      setCurrencyOpen(false);
                      showToast(`Currency set to ${curr}`);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-50 hover:text-[#5a9e32] text-xs"
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setCurrencyOpen(false);
              }}
              className="flex items-center gap-1 hover:text-[#5a9e32] transition-colors"
            >
              <span>{language}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {languageOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded shadow-md z-50 py-1 w-28 text-slate-700">
                {['English', 'Español', 'Français', 'Deutsch'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLanguageOpen(false);
                      showToast(`Language set to ${lang}`);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-50 hover:text-[#5a9e32] text-xs"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login or User Profile */}
          {user ? (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-1.5 text-[#5a9e32] font-medium"
            >
              <User className="w-3.5 h-3.5" />
              <span>Hi, {user.name}</span>
            </button>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-1 hover:text-[#5a9e32] transition-colors"
            >
              <span>Login</span>
              <LogIn className="w-3 h-3 text-[#5a9e32]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
