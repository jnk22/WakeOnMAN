import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// API calls
import {
    getHostCategories,
    addHostCategory,
    updateHostCategory
} from '../../actions/hosts';

// React-Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

// React Color
import {CirclePicker} from 'react-color';

class CategoriesForm extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }

    // PropTypes
    static propTypes = {
        hostCategories: PropTypes.array.isRequired,
        getHostCategories: PropTypes.func.isRequired,
        addHostCategory: PropTypes.func.isRequired,
        updateHostCategory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getHostCategories();

        // Check if CategoriesForm has been called with a specific ID (by
        // clicking 'Edit'-button). If so, fetch the host object and update
        // state values respectively.
        if (this.props.location.state !== undefined && Number.isInteger(this.props.location.state.categoryID)) {
            const host = this.getCategoryObjectByID(this.props.location.state.categoryID);
            for (const [key, value] of Object.entries(host)) {
                if (value) {
                    this.state[key] = value;
                }
            }
        }
    }

    formIdentifier = this.props.location.state !== undefined && Number.isInteger(this.props.location.state.categoryID)
        ? 'Update' : 'Add';

    state = {
        name: '',
        description: '',
        color: '#FFFFFF',
    };

    colorInput = React.createRef();
    colors = [
        '#F44336', '#E91e63', '#9C27b0', '#673AB7',
        '#3F51B5', '#2196F3', '#03A9f4', '#00BCD4',
        '#009688', '#4CAF50', '#8BC34A', '#CDDC39',
        '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',
        '#795548', '#607D8B', '#99FFCC', '#CCCC99',
        '#CCCCCC', '#CCCCFF', '#CCFF99', '#CCFFCC',
        '#CCFFFF', '#FFCC99', '#FFCCCC', '#FFCCFF',
        '#FFFF99', '#FFFFCC', '#A9B3AB', '#C4CCB7',
        '#EAEEC9', '#EEE1B7', '#E8CAAE'];

    routeChange() {
        let path = `categories`;
        this.props.history.push(path);
    }

    getCategoryObjectByID = (id) =>
        this.props.hostCategories.filter(category => category.id === id)[0];

    handleColorChangeComplete = (color) => {
        this.state.color = color.hex.toUpperCase();
        this.colorInput.current.value = color.hex.toUpperCase();
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

        if (this.props.location.state !== undefined && Number.isInteger(this.props.location.state.categoryID)) {
            this.props.updateHostCategory(this.props.location.state.categoryID, category);
        } else {
            this.props.addHostCategory(category);
        }

        // TODO: Validate new category, then redirect
        this.routeChange();
    };

    render() {
        const {name, description, color} = this.state;

        return (
            <>
                <br/>
                <h1>{this.formIdentifier} Category</h1>
                <br/>
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
                                          ref={this.colorInput}
                                          required/><br/>
                            <CirclePicker width="100%"
                                          colors={this.colors}
                                          onChangeComplete={this.handleColorChangeComplete}/>
                        </Col>
                    </Form.Group>
                    <br/>
                    <span style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="primary" type="submit">
                            {this.formIdentifier} category
                        </Button>
                    </span>
                </Form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    hostCategories: state.hostCategories.hostCategories
});

export default connect(mapStateToProps, {
    getHostCategories,
    addHostCategory,
    updateHostCategory
})(withRouter(CategoriesForm));
