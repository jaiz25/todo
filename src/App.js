import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: "",
    }
  };

  //this is where our methods will go

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      currentTodo: event.target.value,
    })
  }

  addItem = (event) => {
    event.preventDefault();
    console.log("the add item method executed");
    this.state.todos.push(this.state.currentTodo)
    this.setState({
      todos: this.state.todos,
    })
  }
  deleteItem = () => {
    var index = this.state.todos.indexOf(this.state.currentTodo)
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos,
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task name:&nbsp;&nbsp;</label>
          <input onChange={this.handleChange} name="taskName" placeholder="Place your ToDo here" />&nbsp;&nbsp;
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {this.state.todos.map((value, index) => {
            return  <li key={index}>{value}&nbsp;&nbsp;<button onClick={this.deleteItem}>Delete</button></li>
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
