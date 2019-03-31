import React, { Component } from 'react';
import { Container, ListGroup,ListGroupItem,Button } from 'reactstrap'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import uuid from 'uuid'
import '../App.css';




class TodoList extends Component {
    state={
        items:[
            {id:uuid(),name:'Usama'},
            {id:uuid(),name:'Umer'},
            {id:uuid(),name:'Raza'},
        ]
    }
  render() {
    return (
      <Container>
          <Button
          color="dark"
          style={{marginBottom:'2rem',marginLeft:'5'}}
          onClick={()=>{
              const name = prompt('Enter Item');
              if(name){
                  this.setState(state =>({
                      items:[...state.items,{id:uuid(),name}]
                  }));
              }
          }}
          >
          Todo List
          </Button>
          <ListGroup>
              <TransitionGroup className="shopping-list">
              {this.state.items.map(({id,name})=>(
                  <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={()=>{this.setState(
                        state =>({
                                items:state.items.filter(items => items.id !== id)
                        })
                        )}}
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

export default TodoList;
