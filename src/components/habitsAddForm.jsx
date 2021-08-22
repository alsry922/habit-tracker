import React, { PureComponent } from "react";

class HabitsAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  handleSubmit = (event) => {
    // debugger;
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
    this.inputRef.current.focus();
  };

  render() {
    return (
      <form
        ref={this.formRef}
        className="add-form"
        onSubmit={this.handleSubmit}
      >
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitsAddForm;
