import styled from "styled-components";

const Card = styled.article`
  width: 30%;
  font-size: 1.6rem;
  margin: 2rem;
  padding: 2rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.white};
`;

export default Card;
