import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getHosts, getHostCategories} from '../actions/hosts';
import Button from "react-bootstrap/Button";

class Hosts extends Component {
    // PropTypes
    static propTypes = {
        hosts: PropTypes.array.isRequired,
        hostCategories: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getHosts();
        this.props.getHostCategories();
    }

    getCategoryName = (host) => {
        let categoryObject = this.props.hostCategories.filter(category => (category.id === host.category))[0];

        if (typeof (categoryObject) === 'object') {
            return categoryObject.name;
        } else {
            return 'None';
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
                        <th>Wake up</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.hosts.map(host => (
                        <tr key={host.id}>
                            <td>{host.id}</td>
                            <td>{host.name}</td>
                            <td>{this.getCategoryName(host)}</td>
                            <td>
                                <Button variant="outline-dark">Wake up</Button>
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

export default connect(mapStateToProps, {getHosts, getHostCategories})(Hosts);
