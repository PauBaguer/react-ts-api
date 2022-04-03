import axios from "../axios";
import { RegisterUser, User } from "../models/user";

const baseURL = "/user";

const getAll = (token: string) => {
  console.log(token);
  return axios.get<User[]>(baseURL + "/", {
    headers: {
      "x-access-token": token,
    },
  });
};

const createUser = (token: string, user: RegisterUser) => {
  return axios.post<Object>(baseURL + "/", user, {
    headers: {
      "x-access-token": token,
    },
  });
};

const updateUser = (token: string, user: RegisterUser, id: String) => {
  return axios.put<Object>(baseURL + "/update/" + id, user, {
    headers: {
      "x-access-token": token,
    },
  });
};

const deleteUser = (token: string, id: String) => {
  return axios.delete<Object>(baseURL + "/" + id, {
    headers: {
      "x-access-token": token,
    },
  });
};

const UserService = {
  getAll,
  createUser,
  updateUser,
  deleteUser,
};

export default UserService;
