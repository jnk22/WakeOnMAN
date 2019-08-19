import React, {Component} from 'react';

// React-Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Wake On MAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#hosts">Hosts</Nav.Link>
                        <Nav.Link href="#categories">Categories</Nav.Link>
                        <Nav.Link href="#settings">Settings</Nav.Link>
                        <Nav.Link href="#users">Users</Nav.Link>
                        <Nav.Link href="#info">Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

export default Header;
