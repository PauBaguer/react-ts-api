import React, { useState } from "react";
import UserService from "./services/user-service";
import { User } from "./models/user";
import "./App.css";
import Table from "./components/table-component";

function App() {
  const [number, setNumber] = useState(5);

  const [userList, setUserList] = useState<User[]>([]);

  const [table, setTable] = useState(<div></div>);

  async function getUsers() {
    const res = await UserService.getAll();
    const userList: User[] = await res.data;
    setUserList(userList);
  }

  function eraseUsers() {
    setUserList([]);
  }

  return (
    <div className="App">
      <header className="App-header">
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
