/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */
import React, {Component} from 'react'

import { filterTasks } from '../../actions'

import './filterTasks.css';

import { connect } from 'react-redux'

const mapStateToProps = store => store.filter;

const mapDispatchToProps = dispatch => ({
    onFilterTasks: filter => dispatch(filterTasks(filter))
})

class FilterTasks extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onFilterTasks(e.target.checked)
    }


    render() {

        return <div className="filter">
            <input type="checkbox" id="filter" name="filter" onChange={this.onChange} />
            <label htmlFor="filter">Show done</label>
        </div>;
    }   
}

export default connect( mapStateToProps, mapDispatchToProps )(FilterTasks);