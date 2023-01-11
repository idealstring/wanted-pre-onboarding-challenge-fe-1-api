import * as yup from "yup";
import SingUpPresenter from "./signup.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup.string().email("이메일 형식 확인").required("필수"),
  password: yup.string().min(8, "8자 이상 필수").required("필수"),
});

export default function SingUpContainer() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();

  const onClickResiter = (data: FieldValues) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_KEY}/users/create`, {
        ...data,
      })
      .then(() => {
        alert("회원가입 완료");
        router.push("/users/login");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SingUpPresenter
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickResiter={onClickResiter}
    />
  );
}
