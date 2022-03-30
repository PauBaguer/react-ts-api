import { User } from "./user";
import { ChatMessage } from "./chatMessage";

export interface Chat {
  _id?: string;
  name: String;
  messages: ChatMessage[];
  users: User[];
}
