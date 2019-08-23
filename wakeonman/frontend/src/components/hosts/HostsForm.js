import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// API calls
import {addHost, getHostCategories} from '../../actions/hosts';

// React-Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class HostsForm extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }

    // PropTypes
    static propTypes = {
        addHost: PropTypes.func.isRequired,
        hostCategories: PropTypes.array.isRequired,
        getHostCategories: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getHostCategories();
    }

    state = {
        name: '',
        description: '',
        ipv4_address: '',
        ipv6_address: '',
        mac_address: '',
        wol_port: '9',
        remote_vnc_url: '',
        remote_teamviewer_id: '',
        remote_splashtop_url: '',
        category: '',
    };

    routeChange() {
        let path = `hosts`;
        this.props.history.push(path);
    }

    onChange = e =>
        this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();

        const host = {};
        for (const [key, value] of Object.entries(this.state)) {
            if (value) {
                host[key] = value;
            }
        }
        if (isNaN(host.category)) {
            delete host.category;
        }

        this.props.addHost(host);

        // TODO: Validate new host, then redirect
        this.routeChange();
    };

    render() {
        const {
            name, description, ipv4_address, ipv6_address, mac_address,
            wol_port, remote_vnc_url, remote_teamviewer_id,
            remote_splashtop_url, category
        } = this.state;

        return (
            <>
                <br/>
                <h1>Add Host</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="formHostName">
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="name"
                                          onChange={this.onChange}
                                          value={name}
                                          required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostCategory">
                        <Form.Label column sm="2">Category</Form.Label>
                        <Col sm="10">
                            <Form.Control as="select"
                                          name="category"
                                          onChange={this.onChange}
                                          value={category}
                                          required>
                                <option value={null}>---</option>
                                {this.props.hostCategories.map(category => (
                                    <option key={category.id}
                                            value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostDesc">
                        <Form.Label column sm="2">Description</Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea"
                                          rows="3"
                                          name="description"
                                          onChange={this.onChange}
                                          value={description}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostIPv4Address">
                        <Form.Label column sm="2">IPv4 address</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="ipv4_address"
                                          onChange={this.onChange}
                                          value={ipv4_address}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostIPv6Address">
                        <Form.Label column sm="2">IPv6 address</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="ipv6_address"
                                          onChange={this.onChange}
                                          value={ipv6_address}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostMACAddress">
                        <Form.Label column sm="2">MAC address</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="mac_address"
                                          onChange={this.onChange}
                                          value={mac_address}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostWOLPort">
                        <Form.Label column sm="2">WOL port</Form.Label>
                        <Col sm="10">
                            <Form.Control type="number"
                                          min="0"
                                          max="65535"
                                          name="wol_port"
                                          onChange={this.onChange}
                                          value={wol_port}
                                          required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostRemoteVNC">
                        <Form.Label column sm="2">VNC remote URL</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="remote_vnc_url"
                                          onChange={this.onChange}
                                          value={remote_vnc_url}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostRemoteTeamviewer">
                        <Form.Label column sm="2">TeamViewer ID</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="remote_teamviewer_id"
                                          onChange={this.onChange}
                                          value={remote_teamviewer_id}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHostRemoteSplashtop">
                        <Form.Label column sm="2">Splashtop URL</Form.Label>
                        <Col sm="10">
                            <Form.Control type="input"
                                          name="remote_splashtop_url"
                                          onChange={this.onChange}
                                          value={remote_splashtop_url}/>
                        </Col>
                    </Form.Group>
                    <span style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="primary" type="submit">
                            Add host
                        </Button>
                    </span>
                </Form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    hostCategories: state.hostCategories.hostCategories
});

export default connect(mapStateToProps, {
    addHost,
    getHostCategories
})(withRouter(HostsForm));
