import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  left: 2rem;
  ${props =>
    props.hasFocus
      ? "top:-1rem; z-index:100; font-size:1.2rem"
      : "top:2rem; z-index:-10; font-size:1.6rem"};

  transition: all 0.3s;
`;

export default Label;
