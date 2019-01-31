import React from "react";
import logo from "./logo.svg";
import "./App-Layout.css";

function AppLayout(props) {
  return (
    <section className="App">
      {props.children}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>My First App in React</p>
    </section>
  );
}

export default AppLayout;
