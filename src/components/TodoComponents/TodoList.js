// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todos";

const TodoList = props => {
  console.log(props.handleToggleComplete);
  //console.log(props.todo);
  return (
    <div>
      {props.todo.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
