import styled from "styled-components";
import { theme } from "../utils/theme";

const Input = styled.input`
  padding: 0.7rem 2rem;
  border-radius: 1.5rem;
  background-color: white;
  border: none;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  width: 20rem;
  ${theme.media.tablet} {
    width: 30rem;
  }

  :focus {
    ::placeholder {
      font-size: 0;
    }
    outline: none;
    box-shadow: 0 1rem 2rem ${({ theme }) => theme.colors.primary};
    border-bottom: 3px solid ${({ theme }) => theme.colors.greyLight};
    width: 30rem;
    ${theme.media.tablet} {
      width: 40rem;
    }
  }
`;

export default Input;
