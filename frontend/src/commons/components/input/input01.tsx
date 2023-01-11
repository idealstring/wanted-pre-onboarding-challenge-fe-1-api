import styled from "@emotion/styled";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import { styleSet } from "../../styles/styleSet";

export default function Input01(props: IInput01Props) {
  return (
    <Wrapper>
      <Input
        id={props.id}
        width={props.width || "100%"}
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
        disabled={props.disabled || false}
        defaultValue={props.defaultValue}
      />
      <Error className="error" error={props.error}>
        {String(props.error)}
      </Error>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 2px;
  border: 1px solid ${styleSet.colors.primary};
`;

const Error = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  color: ${styleSet.colors.primary};
  transition: all 0.35s;
  transform: ${(P: IInputProps) =>
    P.error ? `translate(0, -50%)` : `translate(5rem, -50%)`};
  opacity: ${(P: IInputProps) => (P.error ? `1` : `0`)};
`;

interface IInput01Props {
  type?: string | undefined;
  placeholder?: string;
  width?: string;
  id?: string;
  disabled?: boolean;
  defaultValue?: string | number;
  defalutPreview?: string;
  register?: UseFormRegisterReturn;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

type IInputProps = {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  edit?: boolean;
};
