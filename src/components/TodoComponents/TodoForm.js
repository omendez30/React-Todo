import React from "react";

const ToDoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChange}
        name="todo"
        type="text"
        placeholder="...todo"
        value={props.value}
      />
      <button onClick={props.handleAdd}>Add Todo</button>
      <button onClick={props.handleClear}>Clear Completed</button>
    </form>
  );
};

export default ToDoForm;
