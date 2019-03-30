import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    Container,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,} from 'reactstrap';

class AppNavbar extends Component {
 
        state={
            isOpen:false
        }
        toggle= () =>{
            this.setState({
                isOpen: !this.state.isOpen
                });
        }

  render() {
    return (
        <div>
        <Navbar color="dark" dark expand="sm" className="md-5">
            <Container>
                <NavbarBrand href="/">ToDo List</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="https://portfolio-hmu.firebaseapp.com" target="blanks">
                    Usama
                    </NavLink>
                </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="https://portfolio-hmu.firebaseapp.com" target="blanks">
                    Usama
                    </NavLink>
                </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="https://portfolio-hmu.firebaseapp.com" target="blanks">
                    Usama
                    </NavLink>
                </NavItem>
                </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    );
  }
}

export default AppNavbar;
