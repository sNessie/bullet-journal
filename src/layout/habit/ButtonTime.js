import styled from "styled-components";

export const ButtonTime = styled.button`
  position: relative;
  cursor: ${props => (props.disabled ? "auto" : "pointer")};
  margin: 2rem 1rem 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  transition: all 0.3s;
  background: ${props =>
    props.disabled
      ? props.theme.colors.greyLight
      : props.theme.colors.greyDark};
`;

export const TimeHidden = styled.span`
  transition: all 0.3s;
  font-size: 0;
  position: absolute;
  top: -2rem;
  left: -1rem;
  z-index: 10;
  ${ButtonTime}:hover & {
    font-size: 1rem;
  }
`;
