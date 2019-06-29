import React, { Component,Fragment } from 'react';
import {
    Collapse,
    Navbar,
    Container,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
}  from 'reactstrap'
import Logout from './auth/Logout'
import RegisterModal from './auth/RegisterModal' 
import LoginModal from './auth/LoginModal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AppNavbar extends Component {
    static propTypes = {
        auth:PropTypes.object.isRequired
    }
    state={
        isOpen:false
    }
    toggle= () =>{
        this.setState({
            isOpen: !this.state.isOpen
            });
    }

  render() {
    const {isAuthenticated,user} = this.props.auth;
    const authLinks = (
        <Fragment>
                <NavItem>
                  <span className="navbar-text mr-3">
                        <strong>{user ? `Wellcome ${user.name}`:''}</strong>
                  </span>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
        </Fragment>
    );
    const geustLinks = (
        <Fragment>
                <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
        </Fragment>
    )
    return (
        <div>
        <Navbar color="dark" dark expand="sm" className="md-5">
            <Container>
                <NavbarBrand href="/">ToDo List</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar> 
                {
                    isAuthenticated ? authLinks : geustLinks
                }
                </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    );
  }
}

const mapStateToProps =(state)=>({
        auth: state.auth
})
export default connect(mapStateToProps,null)(AppNavbar);
