import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// API calls
import {addHost, getHostCategories} from '../actions/hosts';

// React-Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class HostFormAdd extends Component {
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

    onChange = e =>
        this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        this.props.addHost(this.state);
    };

    render() {
        const {
            name, description, ipv4_address, ipv6_address, mac_address,
            wol_port, remote_vnc_url, remote_teamviewer_id,
            remote_splashtop_url, category
        } = this.state;

        return (
            <>
                <h1>Add Host</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formHostName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="input"
                                      name="name"
                                      onChange={this.onChange}
                                      value={name}
                                      required/>
                    </Form.Group>
                    <Form.Group controlId="formHostCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select"
                                      name="category"
                                      onChange={this.onChange}
                                      value={category}
                                      required>
                            <option>1</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formHostDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"
                                      rows="3"
                                      name="description"
                                      onChange={this.onChange}
                                      value={description}/>
                    </Form.Group>
                    <Form.Group controlId="formHostIPv4Address">
                        <Form.Label>IPv4 address</Form.Label>
                        <Form.Control type="input"
                                      name="ipv4_address"
                                      onChange={this.onChange}
                                      value={ipv4_address}/>
                    </Form.Group>
                    <Form.Group controlId="formHostIPv6Address">
                        <Form.Label>IPv6 address</Form.Label>
                        <Form.Control type="input"
                                      name="ipv6_address"
                                      onChange={this.onChange}
                                      value={ipv6_address}/>
                    </Form.Group>
                    <Form.Group controlId="formHostMACAddress">
                        <Form.Label>MAC address</Form.Label>
                        <Form.Control type="input"
                                      name="mac_address"
                                      onChange={this.onChange}
                                      value={mac_address}/>
                    </Form.Group>
                    <Form.Group controlId="formHostWOLPort">
                        <Form.Label>WOL port</Form.Label>
                        <Form.Control type="number"
                                      min="0"
                                      max="65535"
                                      name="wol_port"
                                      onChange={this.onChange}
                                      value={wol_port}
                                      required/>
                    </Form.Group>
                    <Form.Group controlId="formHostRemoteVNC">
                        <Form.Label>VNC remote URL</Form.Label>
                        <Form.Control type="input"
                                      name="remote_vnc_url"
                                      onChange={this.onChange}
                                      value={remote_vnc_url}/>
                    </Form.Group>
                    <Form.Group controlId="formHostRemoteTeamviewer">
                        <Form.Label>TeamViewer ID</Form.Label>
                        <Form.Control type="input"
                                      name="remote_teamviewer_id"
                                      onChange={this.onChange}
                                      value={remote_teamviewer_id}/>
                    </Form.Group>
                    <Form.Group controlId="formHostRemoteSplashtop">
                        <Form.Label>Splashtop URL</Form.Label>
                        <Form.Control type="input"
                                      name="remote_splashtop_url"
                                      onChange={this.onChange}
                                      value={remote_splashtop_url}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add host
                    </Button>
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
})(HostFormAdd);
