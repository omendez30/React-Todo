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
        <button className="add-btn" onClick={props.handleAddTodo}>
          Add Todo
        </button>
        <button className="clear-btn" onClick={props.handleClearTodos}>
          Clear Completed
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
