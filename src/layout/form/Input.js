import styled from "styled-components";

const Input = styled.input`
  padding: 1.5rem 2rem;
  border-radius: 1.5rem;
  background-color: white;
  border: none;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  :focus {
    ::placeholder {
      font-size: 0;
    }
    outline: none;
    box-shadow: 0 1rem 2rem ${({ theme }) => theme.colors.primary};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primaryGreen};
  }
`;

export default Input;
