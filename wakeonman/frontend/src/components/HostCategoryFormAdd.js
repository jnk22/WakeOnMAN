import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// API calls
import {addHostCategory} from '../actions/hosts';

// React-Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export class HostCategoryFormAdd extends Component {
    static propTypes = {
        addHostCategory: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        description: '',
        color: '#333333',
    };

    onChange = e =>
        this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();

        const category = {};
        for (const [key, value] of Object.entries(this.state)) {
            if (value) {
                category[key] = value;
            }
        }
        this.props.addHostCategory(category);
    };

    render() {
        const {name, description, color} = this.state;

        return (
            <>
                <h1>Add Host Category</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="formHostCategoryName">
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="name"
                                          onChange={this.onChange}
                                          value={name}
                                          required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostCategoryDesc">
                        <Form.Label column sm="2">Description</Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea"
                                          rows="3"
                                          name="description"
                                          onChange={this.onChange}
                                          value={description}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostCategoryColor">
                        <Form.Label column sm="2">Color</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="color"
                                          onChange={this.onChange}
                                          value={color}
                                          required/>
                        </Col>
                    </Form.Group>
                    <span style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="primary" type="submit">
                            Add category
                        </Button>
                    </span>
                </Form>
            </>
        );
    }
}

export default connect(null, {
    addHostCategory,
})(HostCategoryFormAdd);
