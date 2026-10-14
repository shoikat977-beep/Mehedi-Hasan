import React from 'react';
import { TOP_CATEGORIES } from '../data/products';
import { useStore } from '../context/StoreContext';

export const TopCategories: React.FC = () => {
  const { setSelectedCategory, showToast } = useStore();

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    showToast(`Filtering by ${categoryName}`);
    const el = document.getElementById('best-sellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top-categories" className="py-10">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Top Categories This Week
          </h3>
          <div className="w-12 h-0.5 bg-[#5a9e32] mx-auto mt-2 rounded-full" />
        </div>

        {/* Categories Grid (5 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {TOP_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategorySelect(cat.name)}
              className="bg-white border border-slate-200/90 rounded-xs p-5 flex flex-col items-center justify-between text-center group cursor-pointer hover:border-[#5a9e32] hover:shadow-md transition-all duration-300 min-h-[220px]"
            >
              {/* Category Image */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center p-2">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Category Title */}
              <div className="mt-3 pt-3 border-t border-slate-100 w-full">
                <h4 className="text-xs font-bold text-slate-800 tracking-wider uppercase group-hover:text-[#5a9e32] transition-colors">
                  {cat.name}
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  {cat.itemCount} items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
