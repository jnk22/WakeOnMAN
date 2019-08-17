import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {
    getHosts, addHost, deleteHost, updateHost,
    getHostCategories, addHostCategory, deleteHostCategory, updateHostCategory
} from '../actions/hosts';
import Button from "react-bootstrap/Button";

class Hosts extends Component {
    // PropTypes
    static propTypes = {
        hosts: PropTypes.array.isRequired,
        getHosts: PropTypes.func.isRequired,
        addHost: PropTypes.func.isRequired,
        deleteHost: PropTypes.func.isRequired,
        hostCategories: PropTypes.array.isRequired,
        getHostsCategory: PropTypes.func.isRequired,
        addHostCategory: PropTypes.func.isRequired,
        deleteHostCategory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getHosts();
        this.props.getHostCategories();
    }

    getState = (host) => {
        if (host.state) {
            return <><i style={{color: 'green'}}
                        className="fas fa-circle">&nbsp;</i></>
        } else {
            return <><i style={{color: 'red'}}
                        className="fas fa-circle">&nbsp;</i></>
        }
    };

    getCategoryName = (host) => {
        const categoryObject = this.props.hostCategories.filter(category =>
            (category.id === host.category))[0];

        if (typeof (categoryObject) === 'object') {
            return categoryObject.name;
        } else {
            return 'None';
        }
    };

    getCategoryColor = (host) => {
        const categoryObject = this.props.hostCategories.filter(category =>
            (category.id === host.category))[0];

        if (typeof (categoryObject) === 'object') {
            return {backgroundColor: categoryObject.color};
        } else {
            return {backgroundColor: '#D3D3D3'};
        }
    };

    render() {
        return (
            <>
                <h1>Dashboard</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.hosts.map(host => (
                        <tr style={this.getCategoryColor(host)} key={host.id}>
                            <td>{host.id}</td>
                            <td>{this.getState(host)}{host.name}</td>
                            <td>{this.getCategoryName(host)}</td>
                            <td>
                                <Button variant="success">
                                    Wake up
                                </Button>&nbsp;
                                <Button variant="primary">
                                    Connect ...
                                </Button>&nbsp;
                                <Button variant="secondary">
                                    Edit
                                </Button>&nbsp;
                                <Button variant="danger"
                                        onClick={this.props.deleteHost.bind(this, host.id)}>
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
    hosts: state.hosts.hosts,
    hostCategories: state.hostCategories.hostCategories
});

export default connect(mapStateToProps, {
    getHosts, addHost, deleteHost, updateHost,
    getHostCategories, addHostCategory, deleteHostCategory, updateHostCategory
})(Hosts);
