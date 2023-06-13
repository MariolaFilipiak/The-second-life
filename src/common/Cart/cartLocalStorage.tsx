import { CartItem } from "./types";

  export function getCartItemsFromLocalStorage(): CartItem[] {
    const cartItemsJson = localStorage.getItem("cartItems") || "[]";
    return JSON.parse(cartItemsJson) as CartItem[];
  }
  
  export function setCartItemsToLocalStorage(items: CartItem[]): void {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("cartItems", itemsJson);
  }