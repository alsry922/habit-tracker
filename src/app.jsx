import React, { Component, Fragment } from "react";
import "./app.css";
import Habits from "./components/habits";
import Input from "./components/input";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Input></Input>
        <Habits></Habits>;
      </>
    );
  }
}

export default App;
