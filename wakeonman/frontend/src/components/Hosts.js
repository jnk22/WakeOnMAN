import React, {Component} from "react";
import HostItem from "./HostItem";
import PropTypes from "prop-types";


class Hosts extends Component {
    HostStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridGap: '10px',
        padding: '20px'
    };

    render() {
        return <div className="host-container" style={this.HostStyle}>
            {this.props.hosts.map((host) => (<HostItem host={host}/>))}
        </div>
    }
}

// PropTypes
Hosts.propTypes = {
    hosts: PropTypes.array.isRequired
};


export default Hosts;
