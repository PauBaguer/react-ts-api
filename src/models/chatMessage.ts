import { User } from "./user";

export interface ChatMessage {
  _id?: string;
  user: User;
  message: String;
  date: Date;
}
