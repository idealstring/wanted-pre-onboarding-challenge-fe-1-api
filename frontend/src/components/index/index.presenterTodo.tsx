import { ChangeEvent, useState } from "react";
import Btn01 from "../../commons/components/button/btn01";
import Input01 from "../../commons/components/input/input01";
import { styleSet } from "../../commons/styles/styleSet";
import { dateFormatter } from "../../commons/utils";
import { IIndexPresenterTodoProps } from "./index.types";

export default function IndexPresenterTodo(props: IIndexPresenterTodoProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState("false");

  return (
    <li>
      {isEdit ? (
        <Input01
          defaultValue={props.todo.title}
          width={`90%`}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEditTitle(e.target.value);
          }}
        />
      ) : (
        <p>{props.todo.title}</p>
      )}
      <div>
        <span>{dateFormatter(props.todo.createdAt)}</span>
        {}
        <Btn01
          onClick={
            isEdit
              ? () => {
                  props.onClickUpdateTodo(editTitle, props.todo.id);
                }
              : () => {
                  setIsEdit((edit) => !edit);
                }
          }
          text={isEdit ? "완료" : "수정"}
          bdC={`${styleSet.colors.lightGray}`}
          color={` ${styleSet.colors.subColor02}`}
        />
        <Btn01
          onClick={() => {
            props.onClickDeleteTodo(props.todo.id);
          }}
          text="삭제"
          bdC={`${styleSet.colors.lightGray}`}
          color={` ${styleSet.colors.subColor02}`}
        />
      </div>
    </li>
  );
}
