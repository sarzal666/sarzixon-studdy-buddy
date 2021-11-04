import React from "react";
import UsersList from "../components/organisms/UsersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { theme } from "../assets/styles/theme";

const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
