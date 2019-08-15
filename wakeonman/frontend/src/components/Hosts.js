import React, {Component} from "react";
import {connect} from "react-redux";
import HostItem from "./HostItem";
import PropTypes from "prop-types";
import styled from "styled-components";
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
        const HostsStyled = styled.div`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-gap: 10px;
            padding: 20px;`;

        const HostItemStyled = styled.div`
            background-color: lightgray;
            border: none;
            color: white;
            padding: 10px 10px;
            text-align: left;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer`;

        return (
            <HostsStyled className="host-container">
                {this.props.hosts.map((host) => (
                    <HostItemStyled>
                        {host.name ? `${host.name} <br/>` : ''}
                        {host.category ? `${host.category} <br/>` : ''}
                        {host.mac_address ? `${host.mac_address} <br/>` : ''}
                        {host.ipv4_address ? `${host.ipv4_address} <br/>` : ''}
                        {host.ipv6_address ? `${host.ipv6_address} <br/>` : ''}
                        {host.wol_port ? `${host.wol_port} <br/>` : ''}
                        <br/><br/>
                        <Button variant="outline-dark">Wake up</Button>
                    </HostItemStyled>
                ))}
            </HostsStyled>
        );
    }
}

const mapStateToProps = state => ({
    hosts: state.hosts.hosts
});

export default connect(mapStateToProps, {getHosts})(Hosts);

