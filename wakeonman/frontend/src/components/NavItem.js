import React, {Component} from "react";
import PropTypes from "prop-types";


class NavItem extends Component {
    render() {
        return <div className="navitem">
            {this.props.navItem.title}
        </div>
    }
}

// PropTypes
NavItem.propTypes = {
    navItem: PropTypes.array.isRequired
};

export default NavItem;
