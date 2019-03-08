import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <div className="add-clear">
        <button onClick={props.handleAddTodo}>Add Todo</button>
        <button onClick={props.handleClearTodos}>Clear Completed</button>
      </div>
    </form>
  );
};

export default TodoForm;
