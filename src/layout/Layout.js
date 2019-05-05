import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import PropTypes from "prop-types";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }
    html {
      font-size: 62.5%;
      background-color: ${theme.colors.greyLight};
      font-family: 'Montserrat', sans-serif;
      color: ${({ theme }) => theme.colors.black};
    }
    body {
      font-size: 1.6rem;
    }
`;

const StyledWrapper = styled.div`
  max-width: 120rem;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.6rem;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
