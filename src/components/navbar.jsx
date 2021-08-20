import React, { Component } from "react";

class Navbar extends Component {
  render() {
    let habitCount = 0;
    this.props.habits.forEach((habit) => {
      if (habit.count <= 0) return;
      habitCount = habitCount + 1;
    });
    return (
      <nav className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        Habit Tracker
        <span className="navbar-count">{habitCount}</span>
      </nav>
    );
  }
}

export default Navbar;
