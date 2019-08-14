import React, {Component} from "react";
import NavItem from "./NavItem";
import PropTypes from "prop-types";


class Navigation extends Component {
    render() {
        return <div className="navbar">
            {this.props.navItems.map((navItem) => (<NavItem navItem={navItem}/>))}
        </div>
    }
}

// PropTypes
Navigation.propTypes = {
    navItems: PropTypes.array.isRequired
};

export default Navigation;
