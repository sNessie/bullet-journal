import styled from "styled-components";
import Button from "../Button";

const ButtonAdd = styled(Button)`
  padding: 1rem;
  margin: 2rem;
  width: 200px;
  border: none;
  background: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.white}
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primaryLink};
  }
`;

export default ButtonAdd;
