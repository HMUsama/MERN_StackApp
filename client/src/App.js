import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoList from "./components/TodoList";
import AppNavbar from "./components/AppNavbar";
import TodoModal from "./components/TodoModal";
import { Container } from "reactstrap";
import store from "./store/index";
import { loadUser } from "./store/action/AuthAction";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <TodoModal />
        </Container>
        <TodoList />
      </div>
    );
  }
}

export default App;
