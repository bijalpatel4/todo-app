import React, { Component } from "react";
import shortid from "shortid";

class AddToDoItem extends Component {
  state = {
    text: ""
  };

  handleOnChange = e => {
    this.setState({ text: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addToDos({
      id: shortid.generate(),
      text: this.state.text,
      completed: false
    });
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form className="to-do-form" onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="todotask"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddToDoItem;
