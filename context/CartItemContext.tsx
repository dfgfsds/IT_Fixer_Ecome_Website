"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCartitemsApi } from "@/api-endpoints/CartsApi";

// Context
const CartItemContext = createContext<any | undefined>(undefined);

// Provider
export function CartItemProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);

  useEffect(() => {
    const syncCart = () => {
      const id = localStorage.getItem('cartId');
      // 🔥 Guard: Prevent using string literals "undefined" or "null"
      if (id && id !== 'undefined' && id !== 'null') {
        setCartId(id);
      } else {
        setCartId(null);
      }
    };
    syncCart();
    window.addEventListener('storage', syncCart); // Syncs even if changed in another tab
    return () => window.removeEventListener('storage', syncCart);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["getCartitemsData", cartId],
    queryFn: () => getCartitemsApi(`/${cartId}/`),
    enabled: !!cartId && cartId !== 'undefined' && cartId !== 'null', // only run if valid cartId exists
  });

  return (
    <CartItemContext.Provider
      value={{
        cartItem: data || [],
        isAuthenticated: !!data,
        isLoading,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
}

// Hook
export function useCartItem() {
  const context = useContext(CartItemContext);
  if (!context) {
    throw new Error("useCartItem must be used within a CartItemProvider");
  }
  return context;
}
