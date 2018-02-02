/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
import React, {Component} from 'react'

class InputField extends Component {
    constructor(props) {
        super(props);
        this.inputValue = '';

        this.onImputChange = this.onImputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onImputChange(e) {
        this.inputValue = e.target.value;
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.action(this.inputValue);
    }

    render() {
        return <div>
            <form onSubmit={this.onSubmit}>
                <input className="input-field-text"
                       type="text"
                       onChange={this.onImputChange}/>
                <button className="input-field-confirm"
                        type="submit">{this.props.actionName}</button>
            </form>
        </div>
    }
}

export default InputField