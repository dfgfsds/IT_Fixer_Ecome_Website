import { getProductVariantCartItemUpdate } from "@/api-endpoints/products";

export const GUEST_CART_KEY = "guest_cart";
export const GUEST_CART_EVENT = "guest_cart_updated";

export interface GuestCartProductDetails {
  id?: number | string;
  name?: string;
  price?: number | string;
  discount?: number | string;
  image_urls?: string[];
  product_variant_title?: string;
  product_size?: string;
  [key: string]: any;
}

export interface GuestCartItem {
  id: string;
  product: number;
  product_variant?: number | string | null;
  product_size?: number | string | null;
  quantity: number;
  product_details: GuestCartProductDetails;
}

export const getGuestCart = (): GuestCartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(GUEST_CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading guest cart:", e);
    return [];
  }
};

export const hasGuestCartItems = (): boolean => {
  return getGuestCart().length > 0;
};

export const saveGuestCart = (cart: GuestCartItem[]) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(GUEST_CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event(GUEST_CART_EVENT));
  } catch (e) {
    console.error("Error saving guest cart:", e);
  }
};

export const addToGuestCart = (item: {
  product: number;
  product_variant?: number | string | null;
  product_size?: number | string | null;
  quantity?: number;
  product_details: GuestCartProductDetails;
}) => {
  const cart = getGuestCart();
  const prodId = Number(item.product);
  const variantId = item.product_variant ? String(item.product_variant) : null;
  const sizeId = item.product_size ? String(item.product_size) : null;
  const qtyToAdd = Number(item.quantity) || 1;

  const uniqueId = `guest_${prodId}${variantId ? `_v${variantId}` : ""}${sizeId ? `_s${sizeId}` : ""}`;

  const existingIndex = cart.findIndex((i) => {
    const sameProduct = Number(i.product) === prodId;
    const sameVariant = (i.product_variant ? String(i.product_variant) : null) === variantId;
    const sameSize = (i.product_size ? String(i.product_size) : null) === sizeId;
    return sameProduct && sameVariant && sameSize;
  });

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qtyToAdd;
    // Update product details in case price/images changed
    cart[existingIndex].product_details = {
      ...cart[existingIndex].product_details,
      ...item.product_details,
    };
  } else {
    cart.push({
      id: uniqueId,
      product: prodId,
      product_variant: item.product_variant || null,
      product_size: item.product_size || null,
      quantity: qtyToAdd,
      product_details: {
        ...item.product_details,
        id: prodId,
      },
    });
  }

  saveGuestCart(cart);
};

export const updateGuestCartQty = (
  idOrProductId: any,
  type: "increase" | "decrease",
  currentQty?: number
) => {
  const cart = getGuestCart();
  const targetStr = String(idOrProductId);

  const index = cart.findIndex((item) => {
    return (
      item.id === targetStr ||
      String(item.product) === targetStr ||
      item.id === `guest_${targetStr}`
    );
  });

  if (index === -1) return;

  if (type === "increase") {
    cart[index].quantity += 1;
    saveGuestCart(cart);
  } else if (type === "decrease") {
    const qty = currentQty !== undefined ? currentQty : cart[index].quantity;
    if (qty <= 1 || cart[index].quantity <= 1) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity -= 1;
    }
    saveGuestCart(cart);
  }
};

export const removeFromGuestCart = (idOrProductId: any) => {
  const cart = getGuestCart();
  const targetStr = String(idOrProductId);

  const filtered = cart.filter((item) => {
    return (
      item.id !== targetStr &&
      String(item.product) !== targetStr &&
      item.id !== `guest_${targetStr}`
    );
  });

  saveGuestCart(filtered);
};

export const clearGuestCart = () => {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(GUEST_CART_KEY);
    window.dispatchEvent(new Event(GUEST_CART_EVENT));
  } catch (e) {
    console.error("Error clearing guest cart:", e);
  }
};

export const syncGuestCartToApi = async (
  cartId: string | number,
  userId: string | number,
  vendorId?: string | number | null
): Promise<boolean> => {
  const guestItems = getGuestCart();
  if (!guestItems || guestItems.length === 0) return true;

  const effectiveVendorId = vendorId || 157;

  for (const item of guestItems) {
    let productPayload: any = {};
    if (item.product_size) {
      productPayload = { product_size: item.product_size };
    } else if (item.product_variant) {
      productPayload = { product_variant: item.product_variant };
    } else {
      productPayload = { product: item.product };
    }

    const payload = {
      cart: cartId,
      user: userId,
      vendor: effectiveVendorId,
      quantity: item.quantity || 1,
      created_by: "user",
      ...productPayload,
    };

    try {
      await getProductVariantCartItemUpdate("", payload);
    } catch (err) {
      console.error("Failed to sync item to cart API:", item, err);
    }
  }

  clearGuestCart();
  return true;
};
