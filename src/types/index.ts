export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: {
    text: string;
    type: 'discount' | 'new' | 'hot' | 'save';
  };
  description: string;
  available?: number;
  sold?: number;
  dealEndsAt?: string; // ISO date string
  inStock: boolean;
  specs?: Record<string, string>;
  gallery?: string[];
  tabCategory?: 'laptop' | 'mobile' | 'watches';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  iconName?: string;
  image: string;
  itemCount: number;
}
