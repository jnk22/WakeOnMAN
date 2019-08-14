import React, {Component} from "react";
import Hosts from "./Hosts";
import styled from "styled-components";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {Provider} from 'react-redux';
import store from '../store';


const theme = {
    font: 'Calibri'
};


class App extends Component {
    state = {
        hosts: [
            {
                id: 1,
                categoryId: 1,
                title: 'Test PC 1',
                ip: '192.168.0.10'
            },
            {
                id: 2,
                categoryId: 1,
                title: 'Test PC 2',
                ip: '192.168.0.11'
            },
            {
                id: 3,
                categoryId: 2,
                title: 'Test PC 3',
                ip: '192.168.0.12'
            },
            {
                id: 4,
                categoryId: 1,
                title: 'Test PC 4',
                ip: '192.168.0.13'
            },
            {
                id: 4,
                categoryId: 1,
                title: 'Test PC 4',
                ip: '192.168.0.13'
            },
            {
                id: 4,
                categoryId: 1,
                title: 'Test PC 4',
                ip: '192.168.0.13'
            },
            {
                id: 4,
                categoryId: 1,
                title: 'Test PC 4',
                ip: '192.168.0.13'
            },
            {
                id: 4,
                categoryId: 1,
                title: 'Test PC 4',
                ip: '192.168.0.13'
            },
            {
                id: 4,
                categoryId: 1,
                title: 'Test PC 4',
                ip: '192.168.0.13'
            }
        ],

        navItems: [
            {
                id: 1,
                title: 'Dashboard'
            },
            {
                id: 2,
                title: 'Settings'
            }
        ]
    };

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
                        <Hosts hosts={this.state.hosts}/>
                    </div>
                </div>
            </Provider>);
    }
}

export default App;
