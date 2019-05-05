import styled from "styled-components";
import { theme } from "../utils/theme";

const HeaderNav = styled.nav`
  width: 100vw;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${theme.colors.white};
  padding: 2rem;
  border-bottom: 1px solid ${theme.colors.borderBottom};
  z-index: 100;
  font-size: 1.6rem;
`;

export default HeaderNav;
