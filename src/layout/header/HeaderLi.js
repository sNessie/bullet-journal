import styled from "styled-components";

const HeaderLi = styled.li`
  padding: 0.5rem;
  margin: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryLink};
  border-radius: 5px;
  &.active,
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primaryLink};
  }
`;

export default HeaderLi;
