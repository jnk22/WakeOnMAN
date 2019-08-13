import React, {Component} from "react";
import HostItem from "./HostItem";
import PropTypes from "prop-types";


class Hosts extends Component {
    render() {
        return <div className="wrapper">
            {this.props.hosts.map((host) => (<HostItem host={host}/>))}
        </div>
    }
}

// PropTypes
Hosts.propTypes = {
    hosts: PropTypes.array.isRequired
};

export default Hosts;
