import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  productTabletStylusImg,
  productCameraLensImg,
  productHeadphonesImg,
  ALL_PRODUCTS
} from '../data/products';

export const PromoMiniBanners: React.FC = () => {
  const { setQuickViewProduct } = useStore();

  const handleBannerClick = (categoryName: string, fallbackId: string) => {
    const item = ALL_PRODUCTS.find((p) => p.id === fallbackId) || ALL_PRODUCTS[0];
    setQuickViewProduct(item);
  };

  return (
    <section className="py-4">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Banner 1: Tablet / iPad */}
          <div
            onClick={() => handleBannerClick('Tablet', 'bs-8')}
            className="bg-[#f2f3f5] border border-slate-200 rounded-xs p-6 flex items-center justify-between cursor-pointer group hover:border-[#5a9e32]/50 hover:shadow-xs transition-all relative overflow-hidden"
          >
            <div className="max-w-[60%] z-10">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight group-hover:text-[#5a9e32] transition-colors">
                SAVE UP TO 50% OFF
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                Lorem khaled ipsum is a major key to success
              </p>
              <p className="text-xs font-semibold text-slate-800 mt-3">
                From <span className="text-[#5a9e32] font-bold font-mono text-sm">$499.89</span>
              </p>
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
              <img
                src={productTabletStylusImg}
                alt="Save up to 50% on Tablets"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Banner 2: Camera */}
          <div
            onClick={() => handleBannerClick('Camera', 'bs-3')}
            className="bg-[#f2f3f5] border border-slate-200 rounded-xs p-6 flex items-center justify-between cursor-pointer group hover:border-[#5a9e32]/50 hover:shadow-xs transition-all relative overflow-hidden"
          >
            <div className="max-w-[60%] z-10">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight group-hover:text-[#5a9e32] transition-colors">
                CHRISMAS 50% OFF
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                Lorem khaled ipsum is a major key to success
              </p>
              <p className="text-xs font-semibold text-slate-800 mt-3">
                From <span className="text-[#5a9e32] font-bold font-mono text-sm">$399.00</span>
              </p>
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
              <img
                src={productCameraLensImg}
                alt="Christmas Camera Sale"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Banner 3: Headphone */}
          <div
            onClick={() => handleBannerClick('Headphone', 'bs-2')}
            className="bg-[#f2f3f5] border border-slate-200 rounded-xs p-6 flex items-center justify-between cursor-pointer group hover:border-[#5a9e32]/50 hover:shadow-xs transition-all relative overflow-hidden"
          >
            <div className="max-w-[60%] z-10">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight group-hover:text-[#5a9e32] transition-colors">
                HEADPHONE UP TO 30%
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                Lorem khaled ipsum is a major key to success
              </p>
              <p className="text-xs font-semibold text-slate-800 mt-3 flex items-center gap-2">
                <span className="text-[#5a9e32] font-bold font-mono text-sm">$69.99</span>
                <span className="line-through text-slate-400 font-mono text-xs">$189.99</span>
              </p>
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
              <img
                src={productHeadphonesImg}
                alt="Headphones up to 30%"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
