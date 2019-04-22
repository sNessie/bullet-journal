import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  max-width: 200px;
  border: none;
  background: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primaryLink}
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  :hover {
    color: ${({ theme }) => theme.colors.primaryLink};
    background: ${({ theme }) => theme.colors.white};
 
    ;
  }
`;

export default Button;
