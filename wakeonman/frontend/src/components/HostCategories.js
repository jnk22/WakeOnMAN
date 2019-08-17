import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {
    getHostCategories, deleteHostCategory
} from '../actions/hosts';
import Button from "react-bootstrap/Button";


class HostCategories extends Component {
    // PropTypes
    static propTypes = {
        hostCategories: PropTypes.array.isRequired,
        getHostCategories: PropTypes.func.isRequired,
        deleteHostCategory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getHostCategories();
    }

    getCategoryColor = (category) => {
        if (category) {
            return {backgroundColor: category.color};
        } else {
            return {backgroundColor: '#D3D3D3'};
        }
    };

    render() {
        return (
            <>
                <h1>Host Categories</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.hostCategories.map(category => (
                        <tr style={this.getCategoryColor(category)} key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>
                                <Button variant="secondary">
                                    Edit
                                </Button>&nbsp;
                                <Button variant="danger"
                                        onClick={this.props.deleteHostCategory.bind(this, category.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = state => ({
    hostCategories: state.hostCategories.hostCategories
});

export default connect(mapStateToProps, {
    getHostCategories, deleteHostCategory
})(HostCategories);
