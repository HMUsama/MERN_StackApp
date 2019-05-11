import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TodoList from './components/TodoList'
import AppNavbar from './components/AppNavbar'
import TodoModal from './components/TodoModal'
import {Container} from 'reactstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <Container>
          <TodoModal/>
        </Container>
          <TodoList/>
      </div>
    );
  }
}




export default App;
