import React from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todos";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1,
          completed: false
        },
        {
          tasks: "Bake Cookies",
          id: 2,
          completed: false
        }
      ]
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  changeList = event =>
    this.setState({ [event.target.name]: event.target.value });

  add = event => {
    event.preventDefault();
    let newTodo = { task: this.state.todo, id: Date.now(), completed: false };
    this.setState({ todos: [...this.state.todo, newTodo], todo: "" });
  };

  render() {
    return (
      <div>
        <TodoList handleToggleComplete={this.toggleCompleteTodo} />
        <ToDoForm
          value={this.state.todo}
          handleChange={this.changeList}
          handleAdd={this.add}
          handleClear={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
