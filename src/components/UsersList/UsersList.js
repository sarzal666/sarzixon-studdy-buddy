import React from "react";
import { users } from "../../data/users";
import UsersListItem from "../UsersListItem/UsersListItem";

const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
