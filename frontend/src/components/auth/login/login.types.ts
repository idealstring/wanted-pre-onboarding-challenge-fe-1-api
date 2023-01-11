import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type ILoginPresenterProps = {
  onClickLogin: (data: FieldValues) => void;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
};

export type ILoginData = {
  email: string;
  password: string;
};
