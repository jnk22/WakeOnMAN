import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

// React-Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Wake On MAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/dashboard" exact>Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to="/hosts" exact>Hosts</Nav.Link>
                        <Nav.Link as={NavLink} to="/categories" exact>Categories</Nav.Link>
                        <Nav.Link as={NavLink} to="/settings" exact>Settings</Nav.Link>
                        <Nav.Link as={NavLink} to="/users" exact>Users</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" exact>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

export default Header;
