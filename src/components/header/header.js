import React, {Component} from 'react'

import FilterTask from './../filterTasks/filterTasks'
import SearchField from './../searchField/searchField'

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return <header>
            <h1 className="logo">to-do list</h1>
            <div className="header-actions">
                <FilterTask/>
                <SearchField/>
            </div>
        </header>;
    }
}

export default Header;
