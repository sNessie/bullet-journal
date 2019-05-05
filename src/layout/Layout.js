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
        color: ${({ theme }) => theme.colors.black};
    }
    body {
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        background-color: ${theme.colors.greyLight};
    }
`;

const StyledWrapper = styled.div`
  max-width: 120rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
