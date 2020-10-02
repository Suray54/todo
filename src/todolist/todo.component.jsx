import React, { Component } from "react";
import "./todo.scss";
export class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.task,
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleUpdate = (event) => {
    event.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };
  toggle = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  handleRemove = () => {
    const { removeTodo, id } = this.props;
    removeTodo(id);
  };
  render() {
    const { task } = this.props;
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="newTodo">
          <form className="newTodo__editForm" onSubmit={this.handleUpdate}>
            <input
              name="task"
              type="text"
              placeholder="New Todo"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="newTodo">
          <li
            className={this.props.completed ? "todoTask completed" : "todoTask"}
            onClick={() => this.props.toggleTodo(this.props.id)}
          >
            {task}
          </li>
          <div className="todoButton">
            <button onClick={this.toggle}>
              <i className="fa fa-pen"></i>
            </button>
            <button onClick={this.handleRemove}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
