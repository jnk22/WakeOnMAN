import React, {Component} from "react";
import HostItem from "./HostItem";
import PropTypes from "prop-types";
import styled from "styled-components";


class Hosts extends Component {
    render() {
        const HostStyled = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 10px;
        padding: 20px;`;

        return <HostStyled className="host-container">
            {this.props.hosts.map((host) => (<HostItem host={host}/>))}
        </HostStyled>
    }
}

// PropTypes
Hosts.propTypes = {
    hosts: PropTypes.array.isRequired
};


export default Hosts;
