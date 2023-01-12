import * as S from "./index.styles";
import { styleSet } from "../../commons/styles/styleSet";
import Btn01 from "../../commons/components/button/btn01";
import { IIndexPresenterProps, ITodo } from "./index.types";
import Input01 from "../../commons/components/input/input01";
import { dateFormatter } from "../../commons/utils";

export default function IndexPresenter(props: IIndexPresenterProps) {
  return (
    <S.Main>
      <form onSubmit={props.handleSubmit(props.onClickCreateTodo)}>
        <Input01
          register={props.register("title")}
          placeholder={"할 일 제목을 입력하세요."}
        />
        <Input01
          register={props.register("content")}
          placeholder={"내용을 입력하세요."}
        />
        <Btn01
          text={"쓰기"}
          bgC={styleSet.colors.primary}
          color={styleSet.colors.white}
        />
      </form>
      <S.Ul>
        {props.todos.map((todo: ITodo, i) => (
          <li key={i}>
            <span>{todo.title}</span>
            <span>{dateFormatter(todo.createdAt)}</span>
          </li>
        ))}
      </S.Ul>
    </S.Main>
  );
}
