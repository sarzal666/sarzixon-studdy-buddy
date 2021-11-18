import React from "react";
import UsersList from "../components/organisms/UsersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { theme } from "../assets/styles/theme";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Nav = styled.nav`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 10vw;
  min-width: 150px;
  max-width: 250px;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.white}};
  -webkit-box-shadow: -24px -1px 43px 17px rgba(162, 164, 177, 1);
  -moz-box-shadow: -24px -1px 43px 17px rgba(162, 164, 177, 1);
  box-shadow: -24px -1px 43px 17px rgba(162, 164, 177, 1);
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

const NavListItem = styled.li`
  margin: 15px 0;
`;

const Root = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Nav>
          <NavList>
            <NavListItem>
              <Link to="/">Home</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/about">About</Link>
            </NavListItem>
          </NavList>
        </Nav>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/about" element={<> </>} />
        </Routes>
        {/*<UsersList />*/}
      </Wrapper>
    </ThemeProvider>
  </BrowserRouter>
);

export default Root;
