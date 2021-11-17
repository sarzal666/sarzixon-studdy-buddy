import React, { useState } from "react";
import { usersData } from "../../../data/users";
import UsersListItem from "../../molecules/UsersListItem/UsersListItem";
import { StyledList, StyledTitle, Wrapper } from "./UsersList.styles";
import FormField from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";

function UsersList(props) {
  const initFormData = {
    name: "",
    average: "",
    attendance: "",
  };

  const [users, setUsers] = useState(usersData || []);
  const [formValues, setFormValues] = useState(initFormData);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]:
        e.target.name === "average"
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };

  function deleteUser(key) {
    const filteredUsers = users.filter((user, index) => {
      return index !== key;
    });
    setUsers(filteredUsers);
  }

  function addUser(userData) {
    setUsers([
      ...users,
      {
        name: userData.name,
        average: userData.average,
        attendance: userData.attendance,
      },
    ]);

    setFormValues(initFormData);
  }

  return (
    <>
      <Wrapper>
        <StyledTitle>Add new user</StyledTitle>
        <FormField
          label={"name"}
          id={"newUserName"}
          name={"name"}
          type={"text"}
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label={"average"}
          id={"newUserAverage"}
          name={"average"}
          type={"text"}
          value={formValues.average}
          onChange={handleInputChange}
        />
        <FormField
          label={"attendance"}
          id={"newUserAttendance"}
          name={"attendance"}
          type={"text"}
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <Button onClick={() => addUser(formValues)}>Add</Button>
      </Wrapper>

      <Wrapper>
        <StyledTitle>Students</StyledTitle>
        <StyledList>
          {users.map((userData, index) => (
            <UsersListItem
              deleteUser={deleteUser}
              userData={userData}
              userKey={index}
              key={index}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
}

export default UsersList;
