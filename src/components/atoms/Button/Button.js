import React from "react";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete-icon.svg";
import { StyledButton } from "./Button.styles";

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.icon === "delete" ? <DeleteIcon /> : "X"}
    </StyledButton>
  );
};

export default Button;
