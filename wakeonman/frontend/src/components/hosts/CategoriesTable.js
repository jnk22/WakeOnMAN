import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {contrastFontColor} from '../../library/utils';

// API calls
import {getHostCategories, deleteHostCategory} from '../../actions/hosts';

// React-Bootstrap components
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import CategoriesForm from "./CategoriesForm";


class CategoriesTable extends Component {
    // PropTypes
    static propTypes = {
        hostCategories: PropTypes.array.isRequired,
        getHostCategories: PropTypes.func.isRequired,
        deleteHostCategory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getHostCategories();
    }

    // Return CSS color styles for category background and set font to either
    // white or black, depending on color
    rowCategoryStyle = (category) => {
        return {
            backgroundColor: category.color,
            color: contrastFontColor(category.color)
        };
    };

    render() {
        return (
            <>
                <h1>Categories</h1>
                <br/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {this.props.hostCategories.length > 0 ? (
                        <tbody>
                        {this.props.hostCategories.map(category => (
                            <tr style={this.rowCategoryStyle(category)}
                                key={category.id}>
                                <td>{category.name}</td>
                                <td>
                                    <Link to={{
                                        pathname: '/addcategory',
                                        state: {categoryID: category.id}
                                    }} component={CategoriesForm}>
                                        <Button variant="secondary"
                                                type="submit">
                                            Edit
                                        </Button>&nbsp;
                                    </Link>
                                    <Button variant="danger"
                                            onClick={this.props.deleteHostCategory.bind(this, category.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>) : (
                        <tbody>
                        <tr>
                            <td colSpan="2" style={{fontStyle: 'italic'}}>
                                No categories found
                            </td>
                        </tr>
                        </tbody>
                    )}
                </table>
            </>
        );
    }
}

const mapStateToProps = state => ({
    hostCategories: state.hostCategories.hostCategories
});

export default connect(mapStateToProps, {
    getHostCategories,
    deleteHostCategory
})(CategoriesTable);
