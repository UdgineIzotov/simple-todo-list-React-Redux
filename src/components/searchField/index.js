/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */
import React, {Component} from 'react';

import FaSearch from 'react-icons/lib/fa/search';

import './searchFiled.css';
import { connect } from 'react-redux';

const mapStateToProps = store => ({searchValue: store.searchValue});
class SearchField extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
       this.props.dispatch( { type: 'SEARCH' , searchValue: e.target.value } )
    }

    render() {

        return <div>
            <input className="search-input"
                   type="text"
                   id="search"
                   defaultValue={this.props.searchValue}
                   onChange={this.onChange}
            />
            <button className="search-btn" id="submit">
                <FaSearch />
            </button>
        </div>;
    }
}

export default connect(mapStateToProps)(SearchField)