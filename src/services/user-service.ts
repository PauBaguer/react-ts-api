import axios from "../axios";
import { User } from "../models/user";

const getAll = () => {
  return axios.get<User[]>("/");
};

const UserService = {
  getAll,
};

export default UserService;
