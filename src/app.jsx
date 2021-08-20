import React, { Component, Fragment } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Habits></Habits>;
      </>
    );
  }
}

export default App;
