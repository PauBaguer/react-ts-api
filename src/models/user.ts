import { Book } from "./book";
import { Event } from "./event";
import { Club } from "./club";
import { Chat } from "./chat";
import Dates from "./dates";

export interface User extends Dates {
  _id?: string;
  name: String;
  userName: String;
  birthDate: Date;
  mail: String;
  password: String;
  location: { latidude: Number; longitude: Number };
  books: Book[];
  events: Event[];
  clubs: Club[];
  chats: Chat[];
  disabled: Boolean;
  categories: string[];
}

export interface UserToSend extends Dates {
  name: String;
  userName: String;
  birthDate: Date;
  mail: String;
  location: { latidude: Number; longitude: Number };
  books: Book[];
  events: Event[];
  clubs: Club[];
  chats: Chat[];
  categories: String[];
}
