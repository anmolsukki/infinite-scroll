import React, { Component } from 'react';
import ContactList from "./Components/PostList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Contact</h1>
        <ContactList />
      </div>
    )
  }
}

export default App;
