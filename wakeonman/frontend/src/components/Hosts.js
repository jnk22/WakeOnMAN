import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getHosts} from '../actions/hosts';
import Button from "react-bootstrap/Button";

class Hosts extends Component {
    // PropTypes
    static propTypes = {
        hosts: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getHosts();
    }

    render() {
        return (
            <>
                <h1>Dashboard</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Wake up</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.hosts.map(host => (
                        <tr key={host.id}>
                            <td>{host.id}</td>
                            <td>{host.name}</td>
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
    hosts: state.hosts.hosts
});

export default connect(mapStateToProps, {getHosts})(Hosts);
