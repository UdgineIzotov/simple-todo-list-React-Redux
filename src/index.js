import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css'

import {BrowserRouter as Router} from 'react-router-dom'

import browserHistory from 'history/createBrowserHistory'

import { getRoutes } from './services/Router'

import App from './App'

import {Provider} from 'react-redux'
import Store from './store'

ReactDOM.render((
    <Provider store={Store}>
        <Router>
            <App>
                {getRoutes()}
            </App>
        </Router>
    </Provider>
    ), document.getElementById('root'));
