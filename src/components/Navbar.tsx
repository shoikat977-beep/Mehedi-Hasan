import React, { useState } from 'react';
import { Menu, ChevronDown, Laptop, Smartphone, Camera, Tv, Headphones, Watch, Gamepad2, Layers, Tag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const DEPARTMENTS = [
  { name: 'Laptops & Notebooks', icon: Laptop, count: '38 items' },
  { name: 'Smartphones & Tablets', icon: Smartphone, count: '54 items' },
  { name: 'Cameras & Camcorders', icon: Camera, count: '29 items' },
  { name: 'TV & Home Audio', icon: Tv, count: '41 items' },
  { name: 'Headphones & Earbuds', icon: Headphones, count: '63 items' },
  { name: 'Smartwatches & Trackers', icon: Watch, count: '22 items' },
  { name: 'Gaming Consoles & Gear', icon: Gamepad2, count: '17 items' },
  { name: 'PC & Mobile Accessories', icon: Layers, count: '85 items' },
];

export const Navbar: React.FC = () => {
  const { setSelectedCategory, showToast } = useStore();
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDepartmentClick = (deptName: string) => {
    setSelectedCategory(deptName);
    setDepartmentsOpen(false);
    showToast(`Showing products in: ${deptName}`);
    const el = document.getElementById('best-sellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#5a9e32] text-white select-none relative z-20 shadow-md">
      <div className="max-w-[1240px] mx-auto px-4 flex items-center justify-between">
        {/* Left: ALL DEPARTMENTS Dropdown Button */}
        <div className="relative">
          <button
            onClick={() => setDepartmentsOpen(!departmentsOpen)}
            className="flex items-center gap-3 bg-[#4c872a] hover:bg-[#437725] px-6 py-3.5 font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
          >
            <Menu className="w-4 h-4" />
            <span>ALL DEPARTMENTS</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                departmentsOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Departments Dropdown Menu */}
          {departmentsOpen && (
            <div className="absolute left-0 top-full w-72 bg-white text-slate-800 border border-slate-200 shadow-2xl rounded-b-lg py-2 z-50">
              {DEPARTMENTS.map((dept) => {
                const IconComponent = dept.icon;
                return (
                  <button
                    key={dept.name}
                    onClick={() => handleDepartmentClick(dept.name)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-left hover:bg-slate-50 hover:text-[#5a9e32] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-[#5a9e32]" />
                      <span className="font-medium text-slate-700 group-hover:text-[#5a9e32]">
                        {dept.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {dept.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Center: Main Nav Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-4 text-xs font-bold tracking-wide uppercase">
          <a
            href="#"
            className="px-3 py-3.5 hover:bg-[#4c872a] transition-colors rounded-xs"
          >
            HOME
          </a>

          <div className="relative group">
            <button
              onClick={() => showToast('Switched to Grid Layout view')}
              className="flex items-center gap-1 px-3 py-3.5 hover:bg-[#4c872a] transition-colors"
            >
              <span>LAYOUTS</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* FEATURES with "New" Badge */}
          <div className="relative group">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#ffb703] text-slate-900 text-[9px] font-black px-1.5 py-0.2 rounded-xs uppercase tracking-tight shadow-xs pointer-events-none">
              New
            </span>
            <button
              onClick={() => showToast('Exploring store features')}
              className="flex items-center gap-1 px-3 py-3.5 hover:bg-[#4c872a] transition-colors"
            >
              <span>FEATURES</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="relative group">
            <button
              onClick={() => {
                const el = document.getElementById('top-categories');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1 px-3 py-3.5 hover:bg-[#4c872a] transition-colors"
            >
              <span>COLLECTIONS</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* BLOG with "Hot" Badge */}
          <div className="relative group">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#e63946] text-white text-[9px] font-black px-1.5 py-0.2 rounded-xs uppercase tracking-tight shadow-xs pointer-events-none">
              Hot
            </span>
            <button
              onClick={() => showToast('Tech Articles & Buying Guides')}
              className="flex items-center gap-1 px-3 py-3.5 hover:bg-[#4c872a] transition-colors"
            >
              <span>BLOG</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="relative group">
            <button
              onClick={() => showToast('Store Pages: About Us, FAQ, Contact, Terms')}
              className="flex items-center gap-1 px-3 py-3.5 hover:bg-[#4c872a] transition-colors"
            >
              <span>PAGES</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="relative group">
            <button
              onClick={() => showToast('Avansi Global Marketplace')}
              className="flex items-center gap-1 px-3 py-3.5 hover:bg-[#4c872a] transition-colors"
            >
              <span>MARKETPLACE</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-[#4c872a] rounded"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#4c872a] px-4 py-3 border-t border-[#5a9e32] space-y-2 text-xs font-semibold uppercase">
          <a href="#" className="block py-1.5 hover:text-amber-300">HOME</a>
          <button onClick={() => showToast('Layouts')} className="block w-full text-left py-1.5 hover:text-amber-300">LAYOUTS</button>
          <button onClick={() => showToast('Features')} className="block w-full text-left py-1.5 hover:text-amber-300">FEATURES (NEW)</button>
          <button onClick={() => showToast('Collections')} className="block w-full text-left py-1.5 hover:text-amber-300">COLLECTIONS</button>
          <button onClick={() => showToast('Blog')} className="block w-full text-left py-1.5 hover:text-amber-300">BLOG (HOT)</button>
          <button onClick={() => showToast('Pages')} className="block w-full text-left py-1.5 hover:text-amber-300">PAGES</button>
          <button onClick={() => showToast('Marketplace')} className="block w-full text-left py-1.5 hover:text-amber-300">MARKETPLACE</button>
        </div>
      )}
    </nav>
  );
};
