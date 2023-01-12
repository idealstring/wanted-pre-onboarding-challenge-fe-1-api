import styled from "@emotion/styled";

export const Main = styled.main`
  margin: 10rem auto;
  width: 80%;
`;

export const Ul = styled.ul`
  padding: 2rem 0;

  li {
    width: 100%;

    :nth-of-type(1) {
      width: 80%;
    }
    :nth-of-type(2) {
      width: 20%;
    }
  }
`;
