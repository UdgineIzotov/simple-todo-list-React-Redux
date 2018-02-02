/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */
import React, {Component} from 'react'

import FaSearch from 'react-icons/lib/fa/search'

import './searchFiled.css';

class SearchField extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return <div>
            <input className="search-input" type="text" id="search"/>
            <button className="search-btn" id="submit">
                <FaSearch />
            </button>
        </div>;
    }
}

export default SearchField