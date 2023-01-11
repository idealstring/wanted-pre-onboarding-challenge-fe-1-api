import * as S from "./signup.styles";
import { ISingUpPresenterProps } from "./signup.types";
import Btn01 from "../../../commons/components/button/btn01";
import Input01 from "../../../commons/components/input/input01";
import { styleSet } from "../../../commons/styles/styleSet";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export default function SingUpPresenter(props: ISingUpPresenterProps) {
  return (
    <S.Container>
      <S.Form onSubmit={props.handleSubmit(props.onClickResiter)}>
        <S.H1>회원가입</S.H1>
        <Input01
          type="text"
          placeholder="이메일을 입력하세요"
          register={props.register("email")}
          error={props.formState.errors.email?.message}
        />
        <Input01
          type="password"
          placeholder="비밀번호를 입력하세요"
          register={props.register("password")}
        />
        <S.Description>
          <PriorityHighIcon fontSize={`inherit`} />
          비밀번호는 8자리 이상 입력
        </S.Description>
        <Btn01
          disabled={!props.formState.isDirty || !props.formState.isValid}
          text={"회원가입"}
          bgC={styleSet.colors.primary}
          color={"white"}
        ></Btn01>
      </S.Form>
    </S.Container>
  );
}
