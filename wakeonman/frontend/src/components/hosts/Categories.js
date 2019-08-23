import React from 'react';
import {Link} from 'react-router-dom';
import CategoriesTable from './CategoriesTable';
import CategoriesForm from './CategoriesForm';

// React-Bootstrap components
import Button from 'react-bootstrap/Button';


const Categories = () =>
    <>
        <br/>
        <CategoriesTable/>
        <br/>
        <Link to="/addcategory" component={CategoriesForm}>
            <Button variant="primary" type="submit">
                Add new category
            </Button>
        </Link>
    </>;

export default Categories;
