import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  max-width: 200px;
  color: ${({ theme }) => theme.colors.primaryLink};
  border-radius: 5px;
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primaryLink};
  }
`;

export default Button;
