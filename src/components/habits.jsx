import React, { Component } from "react";
import Habit from "./habit";
import HabitsAddForm from "./habitsAddForm";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitsAddForm onAdd={this.props.onAdd} />
        <ul className="habits">
          {this.props.habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </ul>
        <button className="reset-button" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
