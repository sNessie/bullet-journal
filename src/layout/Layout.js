import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.black};
    }
    body {
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
    }
    *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
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

export default Layout;
