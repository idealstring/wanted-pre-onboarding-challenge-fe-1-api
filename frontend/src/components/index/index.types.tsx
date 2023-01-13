import {
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";

export type IIndexPresenterProps = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickCreateTodo: (data: FieldValues) => void;
  todos: never[];
  onClickDeleteTodo: (id: string) => void;
};

export type ITodo = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};
