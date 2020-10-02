import React, { Component } from "react";
import Todo from "./todo.component";
import TodoForm from "./todoform.component";
import "./todolist.scss";
export class Todolist extends Component {
  state = {
    todos: [
      { id: 1, task: "Stepping Out Of The Comfort Zone.", completed: false },
      {
        id: 2,
        task: "5 Second Rule.",
        completed: false,
      },
    ],
  };

  create = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  toggleCompleted = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  render() {
    //  const todos = this.state.todos.map((todo) => {
    // return (
    // <Todo
    //  key={todo.id}
    //   id={todo.id}
    //    task={todo.task}
    //  completed={todo.completed}
    //removeTodo={this.remove}
    // updateTodo={this.update}
    // toggleTodo={this.toggleCompleted}
    // />
    //);
    //});
    return (
      <div className="todo">
        <h1>
          Todo List! <span>A simple react todo list app.</span>
        </h1>

        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={this.remove}
              updateTodo={this.update}
              toggleTodo={this.toggleCompleted}
            />
          ))}
        </ul>
        <TodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default Todolist;
