import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    ModalBody,
    ModalHeader,
    Modal,
    Button,
    Input,
    Label,
    NavLink
        } from 'reactstrap';
import {connect} from 'react-redux';
import { register } from '../../store/action/AuthAction'
// import uuid from 'uuid'
import PropTypes from 'prop-types'


class RegisterModal extends Component {
    state= {
        modal :false,
        name: '',
        email:'',
        password:'',
        msg:null
    }
    static propTypes = {
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        register:PropTypes.object.isRequired,
    } 

    toggle = () =>{
        this.setState({
            modal : !this.state.modal
        })
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    onSubmit = e=>{
        e.preventDefault();
        const { name,email,password } = this.state;
        // create users object 
        const newUser  = {
            name,
            email,
            password
        }
        this.props.register(newUser)
    }

  render() {
    return (
        <div>
            <NavLink onClick={this.toggle} href="#">
            Register
            </NavLink>
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
             <ModalHeader toggle={this.toggle}> Register</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="todo">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            className="mb-3"
                            placeholder="Insert A Name"
                            onChange={this.onChange}
                            />
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            className="mb-3"
                            placeholder="Insert A Email"
                            onChange={this.onChange}
                            />
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            className="mb-3"
                            placeholder="Insert A Password"
                            onChange={this.onChange}
                            />
                        <Button
                        color="dark"
                        style={{marginTop:'2rem'}} block>Register</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
            </Modal>
        </div>
    );
  }
}

// TodoList.propTypes = {
//     getTodos: PropTypes.func.isRequired,
//     todo: PropTypes.object.isRequired
//   }

const mapStateToProps = (state)=>({
   isAuthenticated : state.auth.isAuththenticated,
   error: state.error
  })
  
  
  export default connect(mapStateToProps,{register})(RegisterModal);
// export default RegisterModal;
