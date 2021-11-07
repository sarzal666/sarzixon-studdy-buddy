import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  margin: 25px;
  padding: 20px 30px;
  border-radius: 25px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
