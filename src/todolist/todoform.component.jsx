import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./todoform.scss";
export class TodoForm extends Component {
  state = { task: "" };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({
      task: "",
    });
  };
  render() {
    return (
      <div className="todoForm">
        <h4>Add a New Todo</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Write Something..."
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
