import * as S from "./index.styles";
import { dateFormatter } from "../../commons/utils";
import { styleSet } from "../../commons/styles/styleSet";
import Btn01 from "../../commons/components/button/btn01";
import { IIndexPresenterProps, ITodo } from "./index.types";
import Input01 from "../../commons/components/input/input01";

export default function IndexPresenter(props: IIndexPresenterProps) {
  return (
    <S.Main>
      <S.H1>TodoList</S.H1>
      <S.Form onSubmit={props.handleSubmit(props.onClickCreateTodo)}>
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
      </S.Form>
      <S.Ul>
        {props.todos.map((todo: ITodo, i) => (
          <li key={i}>
            <p>{todo.title}</p>
            <div>
              <span>{dateFormatter(todo.createdAt)}</span>
              <Btn01
                text="수정"
                bdC={`${styleSet.colors.lightGray}`}
                color={` ${styleSet.colors.subColor02}`}
              />
              <Btn01
                onClick={() => {
                  props.onClickDeleteTodo(todo.id);
                }}
                text="삭제"
                bdC={`${styleSet.colors.lightGray}`}
                color={` ${styleSet.colors.subColor02}`}
              />
            </div>
          </li>
        ))}
      </S.Ul>
    </S.Main>
  );
}
