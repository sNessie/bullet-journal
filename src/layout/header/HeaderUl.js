import styled from "styled-components";

const HeaderUl = styled.ul`
  list-style: none;
  display: ${props => (props.menu ? "flex" : "none")};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  width: 100%;
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 120rem;
  }
`;

export default HeaderUl;
