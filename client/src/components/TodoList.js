import React, { Component } from 'react';
import { Container, ListGroup,ListGroupItem,Button } from 'reactstrap'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import '../App.css';
import {connect} from 'react-redux'
import uuid from 'uuid'
import { getTodos ,deleteTodos} from '../store/action/TodosAction'
// import TodoModal from './TodoModal'
import PropTypes from 'prop-types'



class TodoList extends Component {
    state={
      // todos:[
      //       {id:uuid(),name:'Usama'},
      //       {id:uuid(),name:'Umer'},
      //       {id:uuid(),name:'Raza'},
      //   ]
    }
  componentDidMount(){
    this.props.getTodos();
  }
  componentDidUpdate(){
    getTodos();
  }
  delete=(id)=>{
    this.props.deleteTodos(id);
  }
  render() {
    const {todos} = this.props.todo
    console.log('STORE---------->',todos)
    return (
      <Container>
          <ListGroup>
              <TransitionGroup className="shopping-list">
              {todos.map(({_id,name})=>(
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.delete.bind(this,_id)}
                        >&times;</Button>
                      {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
              </TransitionGroup>
          </ListGroup>
     
      </Container>
    );
  }
}

TodoList.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
}


const mapStateToProps = (state)=>({
  todo:state.todo
})


export default connect(mapStateToProps, {getTodos,deleteTodos})(TodoList);

// export default TodoList;
