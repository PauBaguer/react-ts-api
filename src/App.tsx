import React, { useState } from "react";
import UserService from "./services/user-service";
import { User } from "./models/user";
import "./App.css";
import Table from "./components/table-component";
import AuthService from "./services/auth-service";

function App() {
  const [number, setNumber] = useState(5);

  const [userList, setUserList] = useState<User[]>([]);

  const [table, setTable] = useState(<div></div>);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  let token: string;

  async function getUsers() {
    const res = await UserService.getAll(token);
    const userList: User[] = await res.data;
    setUserList(userList);
  }

  async function login() {
    const res = await AuthService.singin(username, password);
    token = await res.data.token;
  }

  function eraseUsers() {
    setUserList([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
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
        <div>
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
        <div>
          <span className="container">
            <a className="waves-effect waves-light btn" onClick={getUsers}>
              get Users
            </a>

            <a
              className="waves-effect waves-light red btn"
              onClick={eraseUsers}
            >
              Remove Users
            </a>
          </span>

          <Table userList={userList} />
        </div>
      </header>
    </div>
  );
}

export default App;
