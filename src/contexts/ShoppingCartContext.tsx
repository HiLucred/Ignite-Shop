import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  defaultPriceId: string;
}

interface ShoppingCartType {
  productsInCart: Product[];
  isShoppingCartOpen: boolean;
  addItemToCart: (product: Product) => void;
  removeItemToCart: (productId: string) => void;
  toggleShoppingCartWindom: () => void;
}

export const ShoppingCart = createContext({} as ShoppingCartType);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [productsInCart, setProductsInCart] = useState<Product[]>(() => {
    const { cookies } = parseCookies(null, "PRODUCTS_IN_CART");

    if (cookies) {
      return JSON.parse(cookies);
    }

    return [];
  });

  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  useEffect(() => {
    setCookie(null, "PRODUCTS_IN_CART", JSON.stringify(productsInCart), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    if (productsInCart.length === 0) {
      setIsShoppingCartOpen(false);
    }
  }, [productsInCart]);

  function addItemToCart(product: Product) {
    const containInCart = productsInCart.findIndex((item) => {
      return item.id === product.id;
    });

    if (containInCart < 0) {
      setProductsInCart((state) => [...state, product]);
    } else {
      setProductsInCart((state) => [...state]);
    }
  }

  function removeItemToCart(productId: string) {
    const newProductsInCart = productsInCart.filter((item) => {
      return item.id !== productId;
    });

    setProductsInCart(newProductsInCart);
  }

  function toggleShoppingCartWindom() {
    setIsShoppingCartOpen(!isShoppingCartOpen);
  }

  return (
    <ShoppingCart.Provider
      value={{
        productsInCart,
        isShoppingCartOpen,
        addItemToCart,
        removeItemToCart,
        toggleShoppingCartWindom,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
}
