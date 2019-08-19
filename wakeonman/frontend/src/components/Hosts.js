import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// API calls
import {getHosts, deleteHost, getHostCategories} from '../actions/hosts';

// React-Bootstrap components
import Button from 'react-bootstrap/Button';


class Hosts extends Component {
    // PropTypes
    static propTypes = {
        hosts: PropTypes.array.isRequired,
        getHosts: PropTypes.func.isRequired,
        deleteHost: PropTypes.func.isRequired,
        hostCategories: PropTypes.array.isRequired,
        getHostCategories: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getHosts();
        this.props.getHostCategories();
    }

    getState = (host) => {
        if (host.state) {
            return <i style={{color: 'green'}}
                      className="fas fa-circle">&nbsp;</i>;
        } else {
            return <i style={{color: 'red'}}
                      className="fas fa-circle">&nbsp;</i>;
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

    // Return color code based on host's category (if present), otherwise
    // return default color code
    getCategoryColor = (host) => {
        const categoryObject = this.props.hostCategories.filter(category =>
            (category.id === host.category))[0];

        if (typeof (categoryObject) === 'object') {
            return categoryObject.color;
        } else {
            return '#D3D3D3';
        }
    };

    // Return font color (black/white) depending on given color contrast.
    // useRelativeLuminance uses relative calculation as recommended by W3C.
    getFontColor = (colorHex, useRelativeLuminance = true) => {
        const color = {
            r: parseInt(colorHex.substring(1, 3), 16),
            g: parseInt(colorHex.substring(3, 5), 16),
            b: parseInt(colorHex.substring(5, 7), 16)
        };

        if (useRelativeLuminance) {
            // Return W3C compliant font color

            for (const [key, value] of Object.entries(color)) {
                let c = value / 255.0;
                color[key] = (c <= 0.03928) ?
                    (c / 12.92) : ((c + 0.055) / 1.055) ** 2.4;
            }
            const relativeLuminance = 0.2126 * color.r
                + 0.7152 * color.g + 0.0722 * color.b;

            return (relativeLuminance > 0.179) ? '#000000' : '#FFFFFF';
        } else {
            // Return font color with simpler solution (not W3C compliant)

            return ((color.r * 0.299 + color.g * 0.587 + color.b * 0.114) > 186) ?
                '#000000' : '#FFFFFF';
        }
    };

    // Return CSS color styles for host background (based on host's category
    // color code) and set font to either white or black, depending on color
    rowHostStyle = (host) => {
        const backgroundColor = this.getCategoryColor(host);
        const fontColor = this.getFontColor(backgroundColor);

        return {
            backgroundColor: backgroundColor,
            color: fontColor
        };
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
                        </tbody>) : (
                        <tbody>
                        <tr>
                            <td colSpan="3" style={{
                                fontStyle: 'italic'
                            }}>No hosts found
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
    getHostCategories
})(Hosts);
