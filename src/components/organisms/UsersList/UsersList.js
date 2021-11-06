import React, { useState } from "react";
import { usersData } from "../../../data/users";
import UsersListItem from "../../molecules/UsersListItem/UsersListItem";
import { StyledList, Wrapper } from "./UsersList.styles";

function UsersList(props) {
  const [users, setUsers] = useState(usersData);
  console.log(users);

  function deleteUser(name) {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  }

  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            deleteUser={deleteUser}
            userData={userData}
            key={userData.name}
          />
        ))}
      </StyledList>
    </Wrapper>
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
