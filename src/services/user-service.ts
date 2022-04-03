import axios from "../axios";
import { User } from "../models/user";

const baseURL = "/user";

const getAll = (token: string) => {
  console.log(token);
  return axios.get<User[]>(baseURL + "/", {
    headers: {
      "x-access-token": token,
    },
  });
};

const UserService = {
  getAll,
};

export default UserService;
