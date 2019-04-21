import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  left: 2rem;
  top: ${props => (props.hasFocus ? "-1rem" : "2rem")};
  z-index: ${props => (props.hasFocus ? "100" : "-10")};
  font-size ${props => (props.hasFocus ? "1.2rem" : "1.6rem")};
  transition: all 0.3s;
`;

export default Label;
