import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../store';

// React-Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Host and category components
import Hosts from './Hosts';
import HostFormAdd from './HostFormAdd';
import HostCategories from './HostCategories';
import HostCategoryFormAdd from './HostCategoryFormAdd';


class App extends Component {
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
                                <Nav.Link href="#users">Users</Nav.Link>
                                <Nav.Link href="#info">Info</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="container">
                        <br/>
                        <Hosts/>
                        <br/>
                        <HostFormAdd/>
                        <br/>
                        <HostCategories/>
                        <br/>
                        <HostCategoryFormAdd/>
                        <br/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
