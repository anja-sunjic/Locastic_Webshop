import { CartItemType } from "../types";

export function setCartValue(current: Array<CartItemType> = [], key: string, value: CartItemType): void {
    const checkCurrent = current?.filter(c => c.id === value.id);
    if (!checkCurrent.length) {
      const currentCart = [...current, value];
      localStorage.setItem(key, JSON.stringify(currentCart));
    } else {
      const cartIndex = current.findIndex(c => c.id === value.id);
      current[cartIndex] = { ...value, quantity: current[cartIndex].quantity + 1 };
      localStorage.setItem(key, JSON.stringify(current));
    }
}

export function removeCartItem(itemId: Number): void {
    const cart = getCartValue('cart');
    const newCart = cart.filter(c => c.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(newCart));
}

export function getCartValue(key: string, defaultValue: Array<any> = []): Array<CartItemType>|Array<any> {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    }
    return defaultValue;
}

export function getCartQuantity(): number {
    if (typeof window !== "undefined") {
      const cart = getCartValue('cart');
      if (cart) return cart.length;
      return 0;
    }

    return 0;
}

export function getCartItemTotalPrice(cartItem: CartItemType): number {
  return cartItem.price * cartItem.quantity;
}

export function getTotalCartPrice(cart: Array<CartItemType>): number {
  const totalPrices: Array<number> = [];
  cart.map(c => {
    return totalPrices.push(c.price * c.quantity);
  });

  const sum = totalPrices.reduce((prev, curr) => prev + curr, 0);
  return sum;
}

export function getTotalCartQuantity(cart: Array<CartItemType>): number {
  const totalQuantity: Array<number> = [];
  cart.map(c => {
    return totalQuantity.push(c.quantity);
  });

  const sum = totalQuantity.reduce((prev, curr) => prev + curr, 0);
  return sum;
}