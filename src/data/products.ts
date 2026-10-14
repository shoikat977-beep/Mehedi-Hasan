import { Product, CategoryItem } from '../types';

import heroSmartwatchesImg from '../assets/images/hero_smartwatches_1790225716688.jpg';
import bannerUltraHdTvImg from '../assets/images/banner_ultrahd_tv_1790225729807.jpg';
import bannerLaptopDeskImg from '../assets/images/banner_laptop_desk_1790225742145.jpg';
import productCameraLensImg from '../assets/images/product_camera_lens_1790225754297.jpg';
import productHeadphonesImg from '../assets/images/product_headphones_1790225764431.jpg';
import productTabletStylusImg from '../assets/images/product_tablet_stylus_1790225803988.jpg';
import productGamingLaptopImg from '../assets/images/product_gaming_laptop_1790225815680.jpg';
import productSpeakerSystemImg from '../assets/images/product_speaker_system_1790225828323.jpg';

export {
  heroSmartwatchesImg,
  bannerUltraHdTvImg,
  bannerLaptopDeskImg,
  productCameraLensImg,
  productHeadphonesImg,
  productTabletStylusImg,
  productGamingLaptopImg,
  productSpeakerSystemImg
};

export const TOP_CATEGORIES: CategoryItem[] = [
  {
    id: 'smartphones',
    name: 'SMARTPHONES',
    slug: 'smartphones',
    image: productTabletStylusImg,
    itemCount: 42
  },
  {
    id: 'tv-audio',
    name: 'TV & AUDIO',
    slug: 'tv-audio',
    image: bannerUltraHdTvImg,
    itemCount: 28
  },
  {
    id: 'camera',
    name: 'CAMERA',
    slug: 'camera',
    image: productCameraLensImg,
    itemCount: 35
  },
  {
    id: 'smartwatch',
    name: 'SMARTWATCH',
    slug: 'smartwatch',
    image: heroSmartwatchesImg,
    itemCount: 19
  },
  {
    id: 'headphone',
    name: 'HEADPHONE',
    slug: 'headphone',
    image: productHeadphonesImg,
    itemCount: 54
  }
];

export const WEEKLY_DEALS: Product[] = [
  {
    id: 'deal-1',
    name: 'Lenovo Yoga 2 Pro Touchscreen 13.3 3200x1800 SSD',
    category: 'Laptops & Ultrabooks',
    price: 100.0,
    originalPrice: 165.0,
    rating: 5,
    reviewsCount: 24,
    image: productGamingLaptopImg,
    badge: {
      text: '-39%',
      type: 'discount'
    },
    description: 'High performance Lenovo Yoga 2 Pro convertible ultrabook featuring a pristine 13.3" 3200x1800 QHD+ multitouch display, rapid SSD storage, backlit keyboard, and flexible 360-degree hinge.',
    available: 18,
    sold: 12,
    dealEndsAt: new Date(Date.now() + (133 * 86400000) + (8 * 3600000) + (25 * 60000) + (38 * 1000)).toISOString(),
    inStock: true,
    specs: {
      'Screen Size': '13.3 inches QHD+ (3200 x 1800)',
      'Processor': 'Intel Core i7-4510U 3.1 GHz',
      'RAM': '8GB DDR3L',
      'Storage': '256GB Solid State Drive',
      'Weight': '3.06 lbs'
    }
  },
  {
    id: 'deal-2',
    name: 'Reference Series 2.0.0 Home Theater Speaker System',
    category: 'Home Audio & Sound',
    price: 90.0,
    originalPrice: 102.0,
    rating: 5,
    reviewsCount: 38,
    image: productSpeakerSystemImg,
    badge: {
      text: '-12%',
      type: 'discount'
    },
    description: 'Acoustically tuned Reference Series monitor speaker pair engineered for immersive acoustic reproduction, low-distortion tweeters, and heavy-duty swivel mount brackets.',
    available: 24,
    sold: 6,
    dealEndsAt: new Date(Date.now() + (161 * 86400000) + (8 * 3600000) + (25 * 60000) + (38 * 1000)).toISOString(),
    inStock: true,
    specs: {
      'Frequency Response': '45Hz - 24kHz',
      'Power Handling': '120W Peak / 60W RMS',
      'Impedance': '8 Ohms nominal',
      'Inputs': 'Optical, RCA, Bluetooth 5.2'
    }
  }
];

export const BEST_SELLERS: Product[] = [
  {
    id: 'bs-1',
    name: '138cm (55) Full HD Curved Smart TV K6300 Series 6',
    category: 'TV & Video',
    tabCategory: 'laptop',
    price: 45.0,
    rating: 5,
    reviewsCount: 16,
    image: bannerUltraHdTvImg,
    description: 'Immerse yourself into cinematic depth with the 55-inch curved display featuring Auto Depth Enhancer and smart streaming apps.',
    inStock: true,
    specs: {
      'Resolution': 'Full HD 1920x1080',
      'Curvature': '4000R',
      'Refresh Rate': '120 Clear Motion Rate',
      'Connectivity': '3x HDMI, 2x USB, Wi-Fi'
    }
  },
  {
    id: 'bs-2',
    name: 'Bose SoundLink around-ear wireless headphones II B..',
    category: 'Headphones',
    tabCategory: 'mobile',
    price: 52.0,
    rating: 5,
    reviewsCount: 29,
    image: productHeadphonesImg,
    description: 'Crisp, powerful sound with advanced microphone system for clear calls in windy or noisy environments.',
    inStock: true,
    specs: {
      'Battery Life': 'Up to 15 hours play time',
      'Range': '30 ft (9 m)',
      'Charging Time': '3 hours full charge'
    }
  },
  {
    id: 'bs-3',
    name: 'Fujifilm X-T10 Mirrorless Digital Camera with 18-5..',
    category: 'Cameras',
    tabCategory: 'laptop',
    price: 46.0,
    rating: 5,
    reviewsCount: 14,
    image: productCameraLensImg,
    description: 'Compact and lightweight body featuring 16.3MP APS-C X-Trans CMOS II sensor and high-speed electronic viewfinder.',
    inStock: true,
    specs: {
      'Sensor': '16.3 Megapixel APS-C CMOS II',
      'Autofocus': 'Intelligent Hybrid AF in 0.06s',
      'Video': 'Full HD 1080p at 60fps'
    }
  },
  {
    id: 'bs-4',
    name: 'HP Pavilion 22cwa 31.5-inch IPS LED Backlit Monito..',
    category: 'Monitors & Displays',
    tabCategory: 'laptop',
    price: 98.0,
    rating: 5,
    reviewsCount: 31,
    image: bannerLaptopDeskImg,
    badge: {
      text: 'NEW',
      type: 'new'
    },
    description: 'Vibrant edge-to-edge viewing with IPS panel technology, ultra-wide 178-degree viewing angles, and anti-glare treatment.',
    inStock: true,
    specs: {
      'Screen Size': '31.5 inches',
      'Panel Type': 'IPS LED Backlit',
      'Aspect Ratio': '16:9',
      'Response Time': '7ms with overdrive'
    }
  },
  {
    id: 'bs-5',
    name: 'Reference Series 2.0.0 Home Theater Speaker System',
    category: 'Audio',
    tabCategory: 'mobile',
    price: 90.0,
    originalPrice: 102.0,
    rating: 5,
    reviewsCount: 22,
    image: productSpeakerSystemImg,
    badge: {
      text: '-12%',
      type: 'discount'
    },
    description: 'Reference 2.0 studio audio monitors with balanced dynamic drivers and high-definition acoustic fidelity.',
    inStock: true,
    specs: {
      'Peak Power': '120W',
      'Finish': 'Matte Ceramic Black',
      'Warranty': '2-Year Manufacturer'
    }
  },
  // Additional products for tab switching and search
  {
    id: 'bs-6',
    name: 'Apple Watch Series 8 GPS + Cellular 45mm Starlight',
    category: 'Smartwatches',
    tabCategory: 'watches',
    price: 399.0,
    originalPrice: 429.0,
    rating: 5,
    reviewsCount: 89,
    image: heroSmartwatchesImg,
    badge: {
      text: 'HOT',
      type: 'hot'
    },
    description: 'Advanced health sensors and apps, track your sleep stages, ECG anytime, and stay connected on the go.',
    inStock: true
  },
  {
    id: 'bs-7',
    name: 'Samsung Galaxy Watch Active 2 Bluetooth Aluminum',
    category: 'Smartwatches',
    tabCategory: 'watches',
    price: 199.99,
    originalPrice: 249.99,
    rating: 5,
    reviewsCount: 45,
    image: heroSmartwatchesImg,
    badge: {
      text: '-20%',
      type: 'discount'
    },
    description: 'Maximize every moment with connected fitness tracking and sleek lightweight aluminum casing.',
    inStock: true
  },
  {
    id: 'bs-8',
    name: 'Apple iPad Pro 11-inch M2 Liquid Retina Display',
    category: 'Tablets & Mobile',
    tabCategory: 'mobile',
    price: 499.89,
    originalPrice: 599.0,
    rating: 5,
    reviewsCount: 62,
    image: productTabletStylusImg,
    badge: {
      text: 'SAVE 17%',
      type: 'save'
    },
    description: 'Astonishing performance, superfast wireless, next-generation Apple Pencil experience, and iPadOS features.',
    inStock: true
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...WEEKLY_DEALS,
  ...BEST_SELLERS,
  {
    id: 'hero-watch',
    name: 'I Watch Series 2 Sports Edition Silicone Band',
    category: 'Smartwatches',
    price: 349.0,
    originalPrice: 399.0,
    rating: 5,
    reviewsCount: 110,
    image: heroSmartwatchesImg,
    description: 'Built-in GPS, water resistance up to 50 meters, a new lightning-fast dual-core processor, and a display twice as bright.',
    inStock: true
  },
  {
    id: 'hero-tv',
    name: 'Samsung 65-Inch Curved 4K UHD Smart Television',
    category: 'TV & Video',
    price: 799.0,
    originalPrice: 999.0,
    rating: 5,
    reviewsCount: 48,
    image: bannerUltraHdTvImg,
    description: 'Feel the drama of every frame with 4K UHD resolution, HDR premium color gradation, and sleek curved curvature.',
    inStock: true
  },
  {
    id: 'hero-macbook',
    name: 'Apple MacBook Pro 14" M3 Space Gray 512GB',
    category: 'Laptops & Ultrabooks',
    price: 1599.0,
    originalPrice: 1799.0,
    rating: 5,
    reviewsCount: 75,
    image: bannerLaptopDeskImg,
    description: 'The most advanced chips ever built for a personal computer. With up to 22 hours of battery life and Liquid Retina XDR display.',
    inStock: true
  }
];
