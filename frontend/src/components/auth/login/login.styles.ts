import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";

export const Container = styled.section`
  background-color: ${styleSet.colors.white};
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const P = styled.p`
  text-align: center;
  color: ${styleSet.colors.gray};
  a {
    font-weight: 700;
    color: ${styleSet.colors.darkGray};
  }
`;
