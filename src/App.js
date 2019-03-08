import React from "react";
import "./App.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Download App",
          id: 1,
          completed: false
        },
        {
          task: "Sign Up",
          id: 2,
          completed: false
        },
        {
          task: "Follow Walk Through",
          id: 3,
          completed: false
        },
        {
          task: "Rule the world",
          id: 4,
          completed: false
        },
        {
          task: "Shop for clothes",
          id: 5,
          completed: false
        },
        {
          task: "Read a few Chapters",
          id: 6,
          completed: false
        }
      ],
      todo: ""
    };
  }

  add = event => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  change = e => this.setState({ [e.target.name]: e.target.value });

  toggleCompleteTodo = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };
  render() {
    return (
      <div className="app">
        <h1>ToDo List:</h1>
        <TodoList
          handleToggleComplete={this.toggleCompleteTodo}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.change}
          handleAddTodo={this.add}
          handleClearTodos={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
