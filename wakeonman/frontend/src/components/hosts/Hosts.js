import React from 'react';
import {Link} from 'react-router-dom';
import HostsTable from './HostsTable';
import HostsForm from './HostsForm';

// React-Bootstrap components
import Button from 'react-bootstrap/Button';


const Hosts = () =>
    <>
        <br/>
        <HostsTable/>
        <br/>
        <Link to="/addhost" component={HostsForm}>
            <Button variant="primary" type="submit">
                Add new host
            </Button>
        </Link>
    </>;

export default Hosts;
