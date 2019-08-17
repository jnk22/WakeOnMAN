import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// API calls
import {addHostCategory} from '../actions/hosts';

// React-Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class HostFormAdd extends Component {
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
        this.props.addHostCategory(this.state);
    };

    render() {
        const {name, description, color} = this.state;

        return (
            <>
                <h1>Add Host Category</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formHostCategoryName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="input"
                                      name="name"
                                      onChange={this.onChange}
                                      value={name}
                                      required/>
                    </Form.Group>
                    <Form.Group controlId="formHostCategoryDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"
                                      rows="3"
                                      name="description"
                                      onChange={this.onChange}
                                      value={description}/>
                    </Form.Group>
                    <Form.Group controlId="formHostCategoryColor">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="input"
                                      name="color"
                                      onChange={this.onChange}
                                      value={color}
                                      required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add category
                    </Button>
                </Form>
            </>
        );
    }
}

export default connect(null, {
    addHostCategory,
})(HostFormAdd);
