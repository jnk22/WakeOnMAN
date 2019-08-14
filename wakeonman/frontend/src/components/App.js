import React, {Component} from "react";
import Hosts from "./Hosts";
import Navigation from "./Navigation";


class App extends Component {
    state = {
        hosts: [
            {
                id: 1,
                categoryId: 1,
                title: 'Test PC 1',
                ip: '192.168.0.10'
            },
            {
                id: 2,
                categoryId: 1,
                title: 'Test PC 2',
                ip: '192.168.0.11'
            },
            {
                id: 3,
                categoryId: 2,
                title: 'Test PC 3',
                ip: '192.168.0.12'
            },
            {
                id: 4,
                categoryId: 1,
                title: 'Test PC 4',
                ip: '192.168.0.13'
            }
        ],

        navItems: [
            {
                id: 1,
                title: 'Dashboard'
            },
            {
                id: 2,
                title: 'Settings'
            }
        ]
    };

    render() {
        return <div className="App">
            <div className="container">
                <Navigation navItems={this.state.navItems}/>
            </div>
            <div className="container">
                <Hosts hosts={this.state.hosts}/>
            </div>
        </div>
    }
}

export default App;
