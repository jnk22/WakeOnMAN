import React, {Component} from "react";
import Hosts from "./Hosts";


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
        ]
    };

    render() {
        return <div className="App container">
            <Hosts hosts={this.state.hosts}/>
        </div>
    }
}

export default App;
