import React from "react";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete-icon.svg";
import { StyledButton } from "./DeleteButton.styles";

const DeleteButton = (props) => {
  return (
    <StyledButton {...props}>
      {props.icon === "delete" ? <DeleteIcon /> : "X"}
    </StyledButton>
  );
};

export default DeleteButton;
