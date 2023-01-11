import * as S from "./login.styles";
import { ILoginPresenterProps } from "./login.types";
import Btn01 from "../../../commons/components/button/btn01";
import Input01 from "../../../commons/components/input/input01";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <S.Container>
      <S.Form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <Input01
          type="text"
          placeholder="아이디를 입력하세요"
          register={props.register("email")}
          error={props.formState.errors.email?.message}
        />
        <Input01
          type="password"
          placeholder="비밀번호를 입력하세요"
          register={props.register("password")}
        />

        <Btn01 disabled={!props.formState.isDirty || !props.formState.isValid}>
          <ArrowForwardIcon />
        </Btn01>
      </S.Form>
    </S.Container>
  );
}
