/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */
import React, {Component} from 'react'

import './filterTasks.css';

import { connect } from 'react-redux'

@connect( store => store.filter)
class FilterTasks extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.dispatch({ type:'FILTER_CHANGE', filter: e.target.checked })
    }


    render() {

        return <div className="filter">
            <input type="checkbox" id="filter" name="filter" onChange={this.onChange} />
            <label htmlFor="filter">Show done</label>
        </div>;
    }   
}

export default FilterTasks;