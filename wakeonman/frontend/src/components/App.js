import React, {Component} from "react";
import Hosts from "./Hosts";
import styled from "styled-components";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {Provider} from 'react-redux';
import store from '../store';


class App extends Component {
    StyledContainer = styled.div`
        background-color: lightgray
    `;

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Wake On MAN</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Dashboard</Nav.Link>
                                <Nav.Link href="#link">Settings</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="container">
                        <Hosts/>
                    </div>
                </div>
            </Provider>);
    }
}

export default App;
