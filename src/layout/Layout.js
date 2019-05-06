import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import PropTypes from "prop-types";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%;
      background-color: ${({ theme }) => theme.colors.greyLight};
      font-family: 'Montserrat', sans-serif;
      color: ${({ theme }) => theme.colors.black};
    }
    body {
      font-size: 1.6rem;
    }
`;

const StyledWrapper = styled.div`
  max-width: 120rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.6rem;
  ${({ theme }) => theme.media.tablet} {
    margin: 3rem auto;
  }
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
