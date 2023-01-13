import styled from "@emotion/styled";
import { styleSet } from "../../commons/styles/styleSet";

export const Main = styled.main`
  margin: 10rem auto;
  width: 50%;
  min-width: 500px;
  max-width: 1000px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const H1 = styled.h1`
  padding: 1.2rem 0;
  text-align: center;
`;

export const Ul = styled.ul`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 2px;
  background-color: ${styleSet.colors.subColor01};

  li {
    padding: 0.3rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p {
      width: 100%;
    }
    div {
      span {
        color: ${styleSet.colors.subColor02};
      }
      min-width: 220px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
