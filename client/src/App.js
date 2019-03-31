import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TodoList from './components/TodoList'

import AppNavbar from './components/AppNavbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavbar/>
      <TodoList/>
      </div>
    );
  }
}

export default App;
