import * as yup from "yup";
import LoginPresenter from "./login.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { API_ADDRESS } from "../../../commons/api/constants";

const schema = yup.object({
  email: yup.string().email("이메일 형식 확인").required("필수"),
  password: yup
    .string()
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/, "필수")
    .required("필수"),
});

export default function LoginContainer() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = (data: FieldValues) => {
    axios
      .post(`${API_ADDRESS}/users/login`, {
        ...data,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <LoginPresenter
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
    />
  );
}
