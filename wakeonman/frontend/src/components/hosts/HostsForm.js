import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// API calls
import {
    getHosts,
    addHost,
    updateHost,
    getHostCategories
} from '../../actions/hosts';

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
        hosts: PropTypes.array.isRequired,
        getHosts: PropTypes.func.isRequired,
        addHost: PropTypes.func.isRequired,
        updateHost: PropTypes.func.isRequired,
        hostCategories: PropTypes.array.isRequired,
        getHostCategories: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getHostCategories();
        this.props.getHosts();

        // Check if HostsForm has been called with a specific ID (by clicking
        // 'Edit'-button). If so, fetch the host object and update state values
        // respectively.
        if (this.props.location.state !== undefined && Number.isInteger(this.props.location.state.hostID)) {
            const host = this.getHostObjectByID(this.props.location.state.hostID);
            for (const [key, value] of Object.entries(host)) {
                if (value) {
                    this.state[key] = value;
                }
            }
        }
    }

    formIdentifier = this.props.location.state !== undefined && Number.isInteger(this.props.location.state.hostID)
        ? 'Update' : 'Add';

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

    getHostObjectByID = (id) =>
        this.props.hosts.filter(host => host.id === id)[0];

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

        if (this.props.location.state !== undefined && Number.isInteger(this.props.location.state.hostID)) {
            this.props.updateHost(this.props.location.state.hostID, host);
        } else {
            this.props.addHost(host);
        }

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
                <h1>{this.formIdentifier} Host</h1>
                <br/>
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
                    <br/>
                    <span style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="primary" type="submit">
                            {this.formIdentifier} host
                        </Button>
                    </span>
                </Form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    hostCategories: state.hostCategories.hostCategories,
    hosts: state.hosts.hosts
});

export default connect(mapStateToProps, {
    getHosts,
    addHost,
    updateHost,
    getHostCategories
})(withRouter(HostsForm));
