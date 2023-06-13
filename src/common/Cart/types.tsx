export type CartItem = {
    id: any;
    quantity: number;
    price: number;
    image: any;
    title: string;
  }
 export interface CartState {
    items: CartItem[];
  }
  
