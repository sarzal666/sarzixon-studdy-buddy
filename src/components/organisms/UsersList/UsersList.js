import React, { useState } from "react";
import { usersData } from "../../../data/users";
import UsersListItem from "../../molecules/UsersListItem/UsersListItem";
import { StyledList, StyledTitle, Wrapper } from "./UsersList.styles";
import FormField from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";

function UsersList(props) {
  const [users, setUsers] = useState(usersData);
  const [nameValue, setNameValue] = useState("");
  const [averageValue, setAverageValue] = useState("");
  const [attendanceValue, setAttendanceValue] = useState("");

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleAverageChange = (event) => {
    setAverageValue(event.target.value);
  };

  const handleAttendanceChange = (event) => {
    setAttendanceValue(event.target.value);
  };

  function deleteUser(key) {
    const filteredUsers = users.filter((user, index) => {
      console.log(key);
      console.log(index);
      return index !== key;
    });
    setUsers(filteredUsers);
  }

  return (
    <>
      <Wrapper>
        <StyledTitle>Add new user</StyledTitle>
        <FormField
          label={"name"}
          id={"newUserName"}
          name={"newUserName"}
          type={"text"}
          value={nameValue}
          onChange={handleNameChange}
        />
        <FormField
          label={"average"}
          id={"newUserAverage"}
          name={"newUserAverage"}
          type={"text"}
          value={averageValue}
          onChange={handleAverageChange}
        />
        <FormField
          label={"attendance"}
          id={"newUserAttendance"}
          name={"newUserAttendance"}
          type={"text"}
          value={attendanceValue}
          onChange={handleAttendanceChange}
        />
        <Button
          onClick={() =>
            setUsers([
              ...users,
              {
                name: nameValue,
                attendance: attendanceValue,
                average: parseFloat(averageValue),
              },
            ])
          }
        >
          Add
        </Button>
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

// class UsersList extends React.Component {
//   state = {
//     users,
//   };
//
//   /*
//    * setState is asynchronous function
//    * */
//
//   componentDidMount() {}
//
//   componentDidUpdate(prevProps, prevState, snapshot) {}
//
//   componentWillUnmount() {}
//
//   deleteUser = (name) => {
//     const filteredUsers = this.state.users.filter((user) => user.name !== name);
//     this.setState({ users: filteredUsers });
//   };
//
//   render() {
//     return (
//       <Wrapper>
//         <StyledList>
//           {this.state.users.map((userData) => (
//             <UsersListItem
//               userData={userData}
//               key={userData.name}
//               deleteUser={this.deleteUser}
//             />
//           ))}
//         </StyledList>
//       </Wrapper>
//     );
//   }
// }

export default UsersList;
