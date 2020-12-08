import React from "react";

export const CompleteTodo = (props) => {
  const { CompleteTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {CompleteTodos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickBack(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};