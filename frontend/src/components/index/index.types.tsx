import {
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";

export type IIndexPresenterProps = {
  todos: never[];
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickDeleteTodo: (id: string) => void;
  onClickCreateTodo: (inputData: FieldValues) => void;
  onClickUpdateTodo: (inputData: FieldValues, id: string) => void;
};

export type ITodo = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};

export type IIndexPresenterTodoProps = {
  todo: ITodo;
  onClickDeleteTodo: (id: string) => void;
  onClickUpdateTodo: (data: FieldValues, id: string) => void;
};
