import { useState } from "react";
import "./App.css";
import CreateUser from "./components/create-user-component";
import Inputs from "./components/inputs-component";
import Table from "./components/table-component";
import { User } from "./models/user";

function App() {
  const [userList, setUserList] = useState<User[]>([]);
  const [createUserId, setCreateUserId] = useState<String>("");
  const [token, setToken] = useState<string>("");

  return (
    <div className="App">
      <header className="App-header">
        <Inputs emitUserList={setUserList} emitToken={setToken} />
        <Table userList={userList} token={token} emitUserId={setCreateUserId} />
        <CreateUser
          id={createUserId}
          token={token}
          changeOwnId={setCreateUserId}
        />
      </header>
    </div>
  );
}

export default App;
