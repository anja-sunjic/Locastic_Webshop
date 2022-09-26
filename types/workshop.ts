import { UserType } from "./user";

export type ContentType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  userId: number;
  desc: string;
  date: string;
  category: string;
};

export type WorkshopData = {
  content: Array<ContentType>;
  loading: boolean;
  message: string;
  users: Array<UserType>;
};
