import axios from "../axios";

const baseURL = "/auth";

const singin = async (userName: String, password: String) => {
  return await axios.post(baseURL + "/singin", { userName, password });
};

const AuthService = {
  singin,
};

export default AuthService;
