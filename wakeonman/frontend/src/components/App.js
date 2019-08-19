import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';

// Host and category components
import Header from './Header';
import Hosts from './Hosts';
import HostCategories from './HostCategories';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header/>
                        <div className="container">
                            <Switch>
                                <Route path="/#hosts"
                                       component={Hosts}/>
                                <Route path="/#categories"
                                       component={HostCategories}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
