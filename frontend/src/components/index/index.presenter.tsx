import * as S from "./index.styles";
import { dateFormatter } from "../../commons/utils";
import { styleSet } from "../../commons/styles/styleSet";
import Btn01 from "../../commons/components/button/btn01";
import { IIndexPresenterProps, ITodo } from "./index.types";
import Input01 from "../../commons/components/input/input01";
import IndexPresenterTodo from "./index.presenterTodo";

export default function IndexPresenter(props: IIndexPresenterProps) {
  return (
    <S.Main>
      <S.H1>TodoList</S.H1>
      <S.Form onSubmit={props.handleSubmit(props.onClickCreateTodo)}>
        <Input01
          register={props.register("title")}
          placeholder={"할 일을 입력하세요."}
        />
        {/* <Input01
          register={props.register("content")}
          placeholder={"내용을 입력하세요."}
        /> */}
        <Btn01
          text={"쓰기"}
          bgC={styleSet.colors.primary}
          color={styleSet.colors.white}
        />
      </S.Form>
      <S.Ul>
        {props.todos.map((todo: ITodo, i) => (
          <IndexPresenterTodo
            todo={todo}
            key={i}
            onClickDeleteTodo={props.onClickDeleteTodo}
            onClickUpdateTodo={props.onClickUpdateTodo}
          />
        ))}
      </S.Ul>
    </S.Main>
  );
}
