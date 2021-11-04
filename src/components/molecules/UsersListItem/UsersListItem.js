import React from "react";
import PropTypes from "prop-types";
// import deleteIcon from "../../assets/icons/delete-icon.svg";

import Button from "../../atoms/Button/Button";
import Grade from "../../atoms/Grade/Grade";
import UsersListName from "../../atoms/UsersListName/UsersListName";
import { Wrapper } from "./UsersListItem.styles";
// import styles from "./UsersListItem.module.scss";

const UsersListItem = ({ userData: { average, name, attendance = "0%" } }) => {
  return (
    // <li className={styles.user}> css modules
    // <li className={[styles.user, styles.hasBorder].join(" ")}> // two ways of applying more styles , array or string
    // <li className={`${styles.user} ${styles.hasBorder}`}>
    <Wrapper>
      <Grade average={average} />
      <UsersListName name={name} attendance={attendance} />
      <Button icon={"delete"} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
