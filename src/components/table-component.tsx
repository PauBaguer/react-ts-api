import React from "react";
import { User } from "../models/user";
import Actions from "./actions-component";

interface Props {
  userList: User[];
  token: string;
  emitUserId: Function;
}

function Table({ userList, token, emitUserId }: Props) {
  if (userList.length > 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>BirthDate</th>
              <th>Disabled</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: User) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.userName}</td>
                  <td>{user.birthDate.toDateString()}</td>
                  <td>{user.disabled ? "True" : "False"}</td>
                  <td>
                    <Actions user={user} token={token} emitId={emitUserId} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else return <div></div>;
}

export default Table;
