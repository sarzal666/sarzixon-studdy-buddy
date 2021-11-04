import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledP = styled.p`
  font-size: ${({ theme, isName }) =>
    isName ? theme.fontSize.l : theme.fontSize.s};
  font-weight: ${({ theme, isName }) =>
    isName ? theme.fontWeight.bold : theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 10px 0 24px;
  padding: 0;
`;

const UsersListName = ({ name, attendance }) => {
  return (
    <div>
      <StyledP isName>{name}</StyledP>
      <StyledP>{`attendance: ${attendance}`}</StyledP>
    </div>
  );
};

UsersListName.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};

export default UsersListName;
