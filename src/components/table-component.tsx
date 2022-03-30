import React from "react";
import { User } from "../models/user";

interface Props {
  userList: User[];
}

function Table({ userList }: Props) {
  if (userList.length > 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>BirthDate</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: User) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.userName}</td>
                  <td>{user.birthDate}</td>
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
