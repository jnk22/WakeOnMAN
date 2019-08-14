import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


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
            font-size: 16px;`;

        return <HostItemStyled className="host">
            <div>
                ID: {this.props.host.id} ---
                CategoryID: {this.props.host.categoryId} ---
                Title: {this.props.host.title} ---
                IP: {this.props.host.ip}
            </div>
            <div>
                <button>Wake me up!</button>
            </div>
        </HostItemStyled>
    }
}

// PropTypes
HostItem.propTypes = {
    host: PropTypes.object.isRequired
};


export default HostItem;
