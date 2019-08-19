import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../store';

// Host and category components
import Header from './Header';
import Hosts from './Hosts';
import HostFormAdd from './HostFormAdd';
import HostCategories from './HostCategories';
import HostCategoryFormAdd from './HostCategoryFormAdd';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <div className="container">
                        <br/>
                        <Hosts/>
                        <br/>
                        <HostFormAdd/>
                        <br/>
                        <HostCategories/>
                        <br/>
                        <HostCategoryFormAdd/>
                        <br/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
