import React, {Component} from 'react';

import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import Store from './store'

import './App.css';

import Header from './components/header/header'
import Main from './pages/main/main'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={Store}>
                    <Router>
                        <div>
                        <Header/>
                        <Main/>
                            </div>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
