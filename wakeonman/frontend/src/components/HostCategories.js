import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// API calls
import {getHostCategories, deleteHostCategory} from '../actions/hosts';

// React-Bootstrap components
import Button from 'react-bootstrap/Button';


class HostCategories extends Component {
    // PropTypes
    static propTypes = {
        hostCategories: PropTypes.array.isRequired,
        getHostCategories: PropTypes.func.isRequired,
        deleteHostCategory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getHostCategories();
    }

    // Return color code for given category
    getCategoryColor = (category) => {
        return category.color;
    };

    // Return font color (black/white) depending on given color contrast.
    // useRelativeLuminance uses relative calculation as recommended by W3C.
    getFontColor = (colorHex, useRelativeLuminance = true) => {
        const color = {
            r: parseInt(colorHex.substring(1, 3), 16),
            g: parseInt(colorHex.substring(3, 5), 16),
            b: parseInt(colorHex.substring(5, 7), 16)
        };

        if (useRelativeLuminance) {
            // Return W3C compliant font color

            for (const [key, value] of Object.entries(color)) {
                let c = value / 255.0;
                color[key] = (c <= 0.03928) ?
                    (c / 12.92) : ((c + 0.055) / 1.055) ** 2.4;
            }
            const relativeLuminance = 0.2126 * color.r
                + 0.7152 * color.g + 0.0722 * color.b;

            return (relativeLuminance > 0.179) ? '#000000' : '#FFFFFF';
        } else {
            // Return font color with simpler solution (not W3C compliant)

            return ((color.r * 0.299 + color.g * 0.587 + color.b * 0.114) > 186) ?
                '#000000' : '#FFFFFF';
        }
    };

    // Return CSS color styles for category background and set font to either
    // white or black, depending on color
    rowCategoryStyle = (category) => {
        const backgroundColor = this.getCategoryColor(category);
        const fontColor = this.getFontColor(backgroundColor);

        return {
            backgroundColor: backgroundColor,
            color: fontColor
        };
    };

    render() {
        return (
            <>
                <h1>Host Categories</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {this.props.hostCategories.length > 0 ? (
                        <tbody>
                        {this.props.hostCategories.map(category => (
                            <tr style={this.rowCategoryStyle(category)}
                                key={category.id}>
                                <td>{category.name}</td>
                                <td>
                                    <Button variant="secondary">
                                        Edit
                                    </Button>&nbsp;
                                    <Button variant="danger"
                                            onClick={this.props.deleteHostCategory.bind(this, category.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>) : (
                        <tbody>
                        <tr>
                            <td colSpan="2" style={{
                                fontStyle: 'italic'
                            }}>No categories found
                            </td>
                        </tr>
                        </tbody>
                    )}
                </table>
            </>
        );
    }
}

const mapStateToProps = state => ({
    hostCategories: state.hostCategories.hostCategories
});

export default connect(mapStateToProps, {
    getHostCategories,
    deleteHostCategory
})(HostCategories);
