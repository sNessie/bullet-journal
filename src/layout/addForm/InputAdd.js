import styled from "styled-components";

const InputAdd = styled.input`
  padding: 1rem;
  background: transparent;
  border: none;
  transition: all 0.3s;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  line-height: 1.2;
`;

export default InputAdd;
