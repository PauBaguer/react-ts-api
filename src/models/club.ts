import { User } from "./user";
import { Chat } from "./chat";

export interface Club {
  _id?: string;
  name: string;
  description: string;
  admin: User;
  chat: Chat;
  usersList: User[];
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
