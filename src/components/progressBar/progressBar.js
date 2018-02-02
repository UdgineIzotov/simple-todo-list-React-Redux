/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */
import React, {Component} from 'react'

import './progressBar.css'

class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.progressStyle  = {width : '50%'}
    }

    render() {
        return <div className="bar-container">
            <div className="progress" style={this.progressStyle}></div>
        </div>;
    }
}

export default ProgressBar