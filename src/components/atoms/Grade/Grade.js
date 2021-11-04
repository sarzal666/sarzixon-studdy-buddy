import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";
import { StyledGrade } from "./Grade.styles";

const matchGradeColor = (average) => {
  //switch (true) wtf javascript ?
  //okay it makes sense bcs it's like value from switch (value) is compared to case statement
  switch (true) {
    case average >= 0 && average <= 2.99:
      return theme.colors.grade.low;
    case average >= 3 && average <= 3.99:
      return theme.colors.grade.medium;
    case average >= 4:
      return theme.colors.grade.high;
    default:
      return theme.colors.grey;
  }
};

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

const Grade = (props) => {
  return (
    <StyledGrade average={props.average} matchColor={matchGradeColor}>
      <StyledSpan>{props.average.toFixed(1) || "0.0"}</StyledSpan>
    </StyledGrade>
  );
};

Grade.propTypes = {
  grade: PropTypes.number,
};

export default Grade;
