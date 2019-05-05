import styled from "styled-components";
import { theme } from "../utils/theme";

const Card = styled.article`
  width: 25%;
  margin-bottom: 5rem;
  border-radius: 1.6rem;
  padding: 2rem;
  box-shadow: ${theme.boxShadow.boxShadowCard};
  background: ${props => {
    switch (props.data) {
      case "low":
        return theme.colors.todoLow;
      case "medium":
        return theme.colors.todoMedium;
      case "high":
        return theme.colors.todoHigh;
      default:
        return theme.colors.white;
    }
  }};
  transition: box-shadow 0.25s ease;
  :hover {
    box-shadow: ${theme.boxShadow.boxShadowCardHover};
  }
`;

export default Card;
