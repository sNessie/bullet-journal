import styled from "styled-components";
import { theme } from "../utils/theme";

const H1 = styled.h1`
  font-size: 1.4rem;
  ${theme.media.desktop} {
    font-size: 1.6rem;
  }
`;

export default H1;
