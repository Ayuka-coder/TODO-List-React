import React, { useState } from "react";
import "./styles.css";

import { InputTodo } from "./conponents/InputTodo";
import { IncompleteTodo } from "./conponents/IncompleteTodo";
import { CompleteTodo } from "./conponents/CompleteTodo";

export const App = () => {
  const [TodoText, setTodoText] = useState([]);
  const [IncompleteTodos, setIncompleteTodos] = useState([]);
  const [CompleteTodos, setCompleteTodos] = useState([]);

  const onChangeText = (event) => {
    const InputTodo = event.target.value;
    setTodoText(InputTodo);
  };

  const onclickAdd = () => {
    const NewIncompleteTodos = [...IncompleteTodos, TodoText];
    setIncompleteTodos(NewIncompleteTodos);

    setTodoText("");
  };

  const onClickDelete = (index) => {
    const NewIncompleteTodos = [...IncompleteTodos];
    NewIncompleteTodos.splice(index, 1);

    setIncompleteTodos(NewIncompleteTodos);
  };

  const onClickComplete = (index) => {
    const NewIncompleteTodos = [...IncompleteTodos];
    NewIncompleteTodos.splice(index, 1);
    const NewCompleteTodos = [...CompleteTodos, IncompleteTodos[index]];

    setIncompleteTodos(NewIncompleteTodos);
    setCompleteTodos(NewCompleteTodos);
  };

  const onClickBack = (index) => {
    const NewCompleteTodos = [...CompleteTodos];
    NewCompleteTodos.splice(index, 1);
    const NewIncompleteTodos = [...IncompleteTodos, CompleteTodos[index]];

    setCompleteTodos(NewCompleteTodos);
    setIncompleteTodos(NewIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        onChangeText={onChangeText}
        TodoText={TodoText}
        onclickAdd={onclickAdd}
        disabled={IncompleteTodos.length >= 5}
      />
      {IncompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5つまでです。TODOを消化しましょう。
        </p>
      )}

      <IncompleteTodo
        IncompleteTodos={IncompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo CompleteTodos={CompleteTodos} onClickBack={onClickBack} />
    </>
  );
};
