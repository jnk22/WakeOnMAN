import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';

// Host and category components
import Header from './layout/Header';
import Dashboard from './hosts/Dashboard';
import Hosts from './hosts/Hosts';
import Categories from './hosts/Categories';
import Settings from './settings/Settings';
import Users from './settings/Users';
import About from './settings/About';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <Header/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/dashboard"
                                       component={Dashboard}/>
                                <Route exact path="/hosts"
                                       component={Hosts}/>
                                <Route exact path="/categories"
                                       component={Categories}/>
                                <Route exact path="/settings"
                                       component={Settings}/>
                                <Route exact path="/users"
                                       component={Users}/>
                                <Route exact path="/about"
                                       component={About}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
