import styled from "styled-components";
import { theme } from "../utils/theme";

const TodoLi = styled.li`
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  background: ${props => {
    switch (props.priority) {
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
`;

export default TodoLi;
