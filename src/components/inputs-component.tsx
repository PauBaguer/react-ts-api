import { useState } from "react";
import { User } from "../models/user";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";

interface Props {
  emitUserList: Function;
  emitToken: Function;
}
let token: string;

function Inputs({ emitUserList, emitToken }: Props) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  async function getUsers() {
    const res = await UserService.getAll(token);
    const userList: User[] = await res.data;
    userList.forEach((user) => {
      user.birthDate = new Date(user.birthDate);
    });
    emitUserList(userList);
  }

  async function login() {
    const res = await AuthService.singin(username, password);
    token = await res.data.token;
    emitToken(token);
  }

  function eraseUsers() {
    emitUserList([]);
  }

  return (
    <div>
      <div className="separate">
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(evt) => setUsername(evt.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(evt) => setPassword(evt.target.value)}
        />
      </div>
      <div className="separate">
        <a
          className="waves-effect waves-light btn"
          onClick={() => {
            console.log(username + password);
            login();
          }}
        >
          Login
        </a>
      </div>
      <div className="separate">
        <span className="container">
          <a className="waves-effect waves-light btn" onClick={getUsers}>
            get Users
          </a>

          <a className="waves-effect waves-light red btn" onClick={eraseUsers}>
            Remove Users
          </a>
        </span>
      </div>
    </div>
  );
}

export default Inputs;
