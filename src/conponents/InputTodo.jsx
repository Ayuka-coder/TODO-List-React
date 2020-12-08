import React from "react";

export const InputTodo = (props) => {
  const { onChangeText, TodoText, onclickAdd, disabled } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        onChange={onChangeText}
        value={TodoText}
        disabled={disabled}
      />
      <button onClick={onclickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
