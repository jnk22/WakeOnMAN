import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';

// Host and category components
import Header from './layout/Header';
import Hosts from './hosts/HostsTable';
import HostFormAdd from './hosts/HostsForm';
import HostCategories from './hosts/CategoriesTable';
import HostCategoryFormAdd from './hosts/CategoryForm';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <Header/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/"
                                       component={HostsTable}/>
                                <Route exact path="/hosts"
                                       component={HostsTable}/>
                                <Route exact path="/categories"
                                       component={CategoriesTable}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
