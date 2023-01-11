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
`;
