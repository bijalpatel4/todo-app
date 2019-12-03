import React, { Component } from "react";
import "./App.css";
import AddToDoItem from "./components/AddToDoItem";
import ListItems from "./components/ListItem";

class ToDoProject extends Component {
  state = {
    todos: []
  };

  addToDos = todo => {
    const newToDos = [...this.state.todos];
    newToDos.push(todo);
    this.setState({ todos: newToDos });
  };

  handleDelete = id => {
    const filterTodoItem = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: filterTodoItem });
  };

  handleMarkedComplete = id => {
    const markedComplete = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: markedComplete });
  };
  render() {
    return (
      <div className="App">
        <AddToDoItem addToDos={this.addToDos} />
        <ListItems
          todos={this.state.todos}
          onDelete={this.handleDelete}
          onCompleted={this.handleMarkedComplete}
        />
      </div>
    );
  }
}

export default ToDoProject;
