import React, {Component} from "react";
import PropTypes from "prop-types";


class HostItem extends Component {
    HostItemStyle = {
        backgroundColor: this.props.host.categoryId === 1 ? 'lightgray' : 'gray',
        border: 'none',
        color: 'white',
        padding: '10px 10px',
        textAlign: 'left',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px'
    };

    render() {
        return <div className="host" style={this.HostItemStyle}>
            <div>
                ID: {this.props.host.id} ---
                CategoryID: {this.props.host.categoryId} ---
                Title: {this.props.host.title} ---
                IP: {this.props.host.ip}
            </div>
            <div>
                <button>Wake me up!</button>
            </div>
        </div>
    }
}

// PropTypes
HostItem.propTypes = {
    host: PropTypes.object.isRequired
};


export default HostItem;
