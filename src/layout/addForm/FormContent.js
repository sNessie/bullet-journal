import styled from "styled-components";

const FormContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 5rem;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryLink};
  -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  transition: all 0.5s 0.2s;
  ${({ theme }) => theme.media.tablet} {
    width: 35%;
  }
`;

export default FormContent;
