export type CartItemType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  userId: number;
  desc: string;
  date: string;
  quantity: number;
};

export type CartType = {
  data: Array<CartItemType>;
  open: boolean;
  quantity: number;
};
