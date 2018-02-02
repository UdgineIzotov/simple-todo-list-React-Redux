/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */
import React, {Component} from 'react'

import './filterTasks.css';

class FilterTasks extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return <div className="filter">
            <input type="checkbox" id="filter" name="filter"/>
            <label htmlFor="filter">Show done</label>
        </div>;
    }   
}

export default FilterTasks;