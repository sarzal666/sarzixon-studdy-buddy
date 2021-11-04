import styled from "styled-components";

export const StyledGrade = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  background-color: ${({ average, matchColor }) => matchColor(average)};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
