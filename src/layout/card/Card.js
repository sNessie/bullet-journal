import styled from "styled-components";

const Card = styled.article`
  width: 100%;
  margin-bottom: 5rem;
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow.boxShadowCard};
  transition: box-shadow 0.25s ease;
  ${({ theme }) => theme.media.tablet} {
    width: 45%;
  }
  :hover {
    box-shadow: ${({ theme }) => theme.boxShadow.boxShadowCardHover};
  }
`;

export default Card;
