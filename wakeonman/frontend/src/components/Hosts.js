import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {contrastFontColor} from '../library/utils';

// API calls
import {
    getHosts,
    deleteHost,
    startHost,
    getHostCategories
} from '../actions/hosts';

// React-Bootstrap components
import Button from 'react-bootstrap/Button';


class Hosts extends Component {
    // PropTypes
    static propTypes = {
        hosts: PropTypes.array.isRequired,
        getHosts: PropTypes.func.isRequired,
        deleteHost: PropTypes.func.isRequired,
        startHost: PropTypes.func.isRequired,
        hostCategories: PropTypes.array.isRequired,
        getHostCategories: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getHosts();
        this.props.getHostCategories();
    }

    getHostCategoryObject = (host) => {
        const category = this.props.hostCategories.filter(category =>
            (category.id === host.category))[0];

        if (typeof (category) === 'object') {
            return category;
        } else {
            return null;
        }
    };

    getCategoryName = (host) => {
        const category = this.getHostCategoryObject(host);

        if (category) {
            return category.name;
        } else {
            return '---';
        }
    };

    // Return CSS color styles for host background (based on host's category
    // color code) and set font to either white or black, depending on color
    rowHostStyle = (host) => {
        const category = this.getHostCategoryObject(host);

        if (category) {
            return {
                backgroundColor: category.color,
                color: contrastFontColor(category.color)
            };
        } else {
            return {
                backgroundColor: '#FFFFFF',
                color: '#000000'
            };
        }
    };

    getHostState = (host) => {
        if (host.state) {
            return <i style={{color: 'green'}}
                      className="fas fa-circle">&ensp;</i>;
        } else {
            return <i style={{color: 'red'}}
                      className="fas fa-circle">&ensp;</i>;
        }
    };

    render() {
        return (
            <>
                <h1>Hosts</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {this.props.hosts.length > 0 ? (
                        <tbody>
                        {this.props.hosts.map(host => (
                            <tr style={this.rowHostStyle(host)}
                                key={host.id}>
                                <td>
                                    {this.getHostState(host)}
                                    {host.name}</td>
                                <td>
                                    {this.getCategoryName(host)}
                                </td>
                                <td>
                                    <Button variant="success"
                                            onClick={this.props.startHost.bind(this, host.id)}>
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
                        </tbody>) : (
                        <tbody>
                        <tr>
                            <td colSpan="3" style={{fontStyle: 'italic'}}>
                                No hosts found
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
    hosts: state.hosts.hosts,
    hostCategories: state.hostCategories.hostCategories
});

export default connect(mapStateToProps, {
    getHosts,
    deleteHost,
    startHost,
    getHostCategories
})(Hosts);
