"use client";
import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCartitemsApi } from "@/api-endpoints/CartsApi";
import {
  getGuestCart,
  addToGuestCart,
  updateGuestCartQty,
  removeFromGuestCart,
  clearGuestCart,
  syncGuestCartToApi,
  GuestCartItem,
  GUEST_CART_KEY,
  GUEST_CART_EVENT,
} from "@/lib/cartUtils";

// Context
const CartItemContext = createContext<any | undefined>(undefined);

// Provider
export function CartItemProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [guestCart, setGuestCart] = useState<GuestCartItem[]>([]);
  const queryClient = useQueryClient();

  useEffect(() => {
    const syncCart = () => {
      const id = localStorage.getItem('cartId');
      // 🔥 Guard: Prevent using string literals "undefined" or "null"
      if (id && id !== 'undefined' && id !== 'null') {
        setCartId(id);
      } else {
        setCartId(null);
      }
      setGuestCart(getGuestCart());
    };
    syncCart();
    window.addEventListener('storage', syncCart);
    window.addEventListener(GUEST_CART_EVENT, syncCart);
    return () => {
      window.removeEventListener('storage', syncCart);
      window.removeEventListener(GUEST_CART_EVENT, syncCart);
    };
  }, []);

  const isValidCartId = !!cartId && cartId !== 'undefined' && cartId !== 'null';

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getCartitemsData", cartId],
    queryFn: () => getCartitemsApi(`/${cartId}/`),
    enabled: isValidCartId,
  });

  // Auto-sync guest cart if user is logged in and cartId exists
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedUserId = localStorage.getItem("userId");
    const storedCartId = localStorage.getItem("cartId");
    const storedGuestCart = localStorage.getItem(GUEST_CART_KEY);

    if (storedUserId && storedCartId && storedCartId !== "null" && storedCartId !== "undefined" && storedGuestCart) {
      try {
        const parsed = JSON.parse(storedGuestCart);
        if (Array.isArray(parsed) && parsed.length > 0) {
          syncGuestCartToApi(storedCartId, storedUserId, 157).then(() => {
            queryClient.invalidateQueries({ queryKey: ["getCartitemsData"] });
            queryClient.invalidateQueries({ queryKey: ["getCartItemsDetailed"] });
            setGuestCart([]);
          });
        }
      } catch (e) {
        console.error("Cart sync check error:", e);
      }
    }
  }, [cartId, queryClient]);

  const effectiveCartItem = isValidCartId ? (data || { data: [] }) : { data: guestCart };

  return (
    <CartItemContext.Provider
      value={{
        cartItem: effectiveCartItem,
        guestCart,
        isAuthenticated: isValidCartId && !!data,
        isLoading: isValidCartId ? isLoading : false,
        refetchCart: refetch,
        addToGuestCart,
        updateGuestCartQty,
        removeFromGuestCart,
        clearGuestCart,
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
