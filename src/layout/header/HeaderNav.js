import styled from "styled-components";

const HeaderNav = styled.nav`
  width: 100vw;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  text-align: right;
  padding: 2rem;
  z-index: 100;
  ${({ theme }) => theme.media.tablet} {
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
  }
`;

export default HeaderNav;
