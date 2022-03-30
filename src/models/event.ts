import { Chat } from "./chat";
import { User } from "./user";

export interface Event {
  _id?: string;
  name: String;
  description: String;
  location: {
    type: {
      latitude: Number;
      longitude: Number;
    };
  };
  admin: User;
  chat: Chat;
  eventDate: Date;
  usersList: User[];
  category: String[];
}
