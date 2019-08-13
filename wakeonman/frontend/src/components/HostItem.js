import React, {Component} from "react";
import PropTypes from "prop-types";


class HostItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: this.props.host.categoryId === 1 ? 'lightgray' : 'gray'
        }
    };

    render() {
        return <div className="box" style={this.getStyle()}>
            <div className="item-desc">
                ID: {this.props.host.id} ---
                CategoryID: {this.props.host.categoryId} ---
                Title: {this.props.host.title} ---
                IP: {this.props.host.ip}</div>
            <div className="item-btn">
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
