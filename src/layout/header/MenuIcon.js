import styled from "styled-components";

export const MenuIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const Icon = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  margin: 6px 0px;
  transition: 0.4s;
`;

export const FirstIcon = styled(Icon)`
  transform: ${props =>
    props.menu ? "rotate(-45deg) translate(-9px, 6px)" : ""};
`;

export const SecondIcon = styled(Icon)`
  opacity: ${props => (props.menu ? "0" : "")};
`;

export const ThirdIcon = styled(Icon)`
  transform: ${props =>
    props.menu ? "rotate(45deg) translate(-8px, -8px)" : ""};
`;
