import { useEffect, useState } from "react";
import client from "../../commons/api/client";
import IndexPresenter from "./index.presenter";
import UseAuth from "../../commons/hooks/useAuth";
import { FieldValues, useForm } from "react-hook-form";

export default function IndexContainer() {
  UseAuth();
  const { register, handleSubmit } = useForm();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    client
      .get("/todos")
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((error) => (error ? alert("error") : null));
  }, []);

  console.log(todos);

  const onClickCreateTodo = (data: FieldValues) => {
    client
      .post("/todos", { ...data })
      .then((response) => {
        alert("등록완료");
      })
      .catch((error) => (error ? alert("error") : null));
  };

  return (
    <IndexPresenter
      todos={todos}
      register={register}
      handleSubmit={handleSubmit}
      onClickCreateTodo={onClickCreateTodo}
    />
  );
}
