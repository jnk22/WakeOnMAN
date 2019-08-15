import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "react-bootstrap/Button";


class HostItem extends Component {
    render() {
        const HostItemStyled = styled.div`
            background-color: ${this.props.host.categoryId === 1 ? 'lightgray' : 'gray'};
            border: none;
            color: white;
            padding: 10px 10px;
            text-align: left;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer`;

        return <HostItemStyled className="host-item">
            ID: {this.props.host.id}<br/>
            CategoryID: {this.props.host.categoryId}<br/>
            Title: {this.props.host.title}<br/>
            IP: {this.props.host.ip}<br/><br/>
            <Button variant="outline-dark">Wake up</Button>
        </HostItemStyled>
    }
}

// PropTypes
HostItem.propTypes = {
    host: PropTypes.object.isRequired
};

export default HostItem;
