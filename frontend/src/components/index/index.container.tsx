import { useEffect, useState } from "react";
import client from "../../commons/api/client";
import IndexPresenter from "./index.presenter";
import UseAuth from "../../commons/hooks/useAuth";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function IndexContainer() {
  UseAuth();
  const { register, handleSubmit } = useForm();
  const [todos, setTodos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    client
      .get("/todos")
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((error) => (error ? alert("error") : null));
  }, []);

  const onClickCreateTodo = (inputData: FieldValues) => {
    client
      .post("/todos", { ...inputData })
      .then(() => {
        alert("등록완료");
        router.reload();
      })
      .catch((error) => (error ? alert("error") : null));
  };

  const onClickUpdateTodo = (inputData: string, id: string) => {
    client
      .put(`/todos/${id}`, { title: inputData })
      .then(() => {
        alert("수정완료");
        router.reload();
      })
      .catch((error) => (error ? alert("error") : null));
  };

  const onClickDeleteTodo = (id: string) => {
    client
      .delete(`/todos/${id}`)
      .then(() => {
        alert("삭제완료");
        router.reload();
      })
      .catch((error) => (error ? alert("error") : null));
  };

  return (
    <IndexPresenter
      todos={todos}
      register={register}
      handleSubmit={handleSubmit}
      onClickCreateTodo={onClickCreateTodo}
      onClickUpdateTodo={onClickUpdateTodo}
      onClickDeleteTodo={onClickDeleteTodo}
    />
  );
}
