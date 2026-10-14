import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { ALL_PRODUCTS, BEST_SELLERS } from '../data/products';

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;

  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;

  compareList: Product[];
  toggleCompare: (product: Product) => void;
  isCompared: (productId: string) => boolean;

  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;

  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;

  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;

  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  toastMessage: string | null;
  showToast: (msg: string) => void;

  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string } | null) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with initial cart items or empty
  const [cart, setCart] = useState<CartItem[]>(() => {
    return [
      { product: BEST_SELLERS[0], quantity: 1 }
    ];
  });

  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name.slice(0, 24)}..." to cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast('Removed from wishlist');
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast('Saved to your wishlist!');
        return [...prev, product];
      }
    });
  };

  const isWishlisted = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const toggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast('Removed from compare list');
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          showToast('You can compare maximum 4 products');
          return prev;
        }
        showToast('Added to product comparison');
        return [...prev, product];
      }
    });
  };

  const isCompared = (productId: string) => {
    return compareList.some((p) => p.id === productId);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        wishlist,
        toggleWishlist,
        isWishlisted,
        compareList,
        toggleCompare,
        isCompared,
        quickViewProduct,
        setQuickViewProduct,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isLoginOpen,
        setIsLoginOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCompareOpen,
        setIsCompareOpen,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        toastMessage,
        showToast,
        user,
        setUser
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
