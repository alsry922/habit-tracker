import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input-form">
        <input className="input" type="text" placeholder="Habit" />
        <button className="add">Add</button>
      </div>
    );
  }
}

export default Input;
