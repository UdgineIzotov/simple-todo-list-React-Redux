/**
 * Created by Evhenii_Izotov on 2/7/2018.
 */
import React, {Component} from 'react'

import Task from '../../model/Task'

import "./editComponent.css"

class EditComponent extends Component {
    constructor(props) {
        super(props);

        this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
        this.onDoneChange = this.onDoneChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

        console.log(this.props);

        this.name = this.props.task.name;
        this.isDone = this.props.task.isDone;
        this.description = this.props.task.description;
    }



    onNameChange(e) {
        this.name = e.target.value
        console.log(this.name)
    }

    onDoneChange(e) { this.isDone = e.target.checked;
        console.log(this.isDone)
    }

    onDescriptionChanged(e) { this.description = e.target.value }

    saveChanges() {

        this.props.onSaveChanges(new Task(
            this.props.task.id,
            this.props.task.categoryId,
            this.name,
            this.isDone,
            this.description
        ))
    }

    render() {
        return <div className="edit-component">
            <div className="actions">
                <button className="save" onClick={this.saveChanges}>Save changes</button>
                <button className="cansel" onClick={this.props.onCansel}>Cansel</button>
            </div>
            <input type="text"
                   className="task-name"
                   defaultValue={this.name}
                   onChange={this.onNameChange}
            />

            <label htmlFor="isDone" className="done-chbx">
                <input type="checkbox" id="isDone" defaultChecked={this.isDone} onChange={this.onDoneChange}/>
                Done</label>
            <textarea
                placeholder="Description"
                className="description"
                defaultValue={this.description}
                onChange={this.onDescriptionChanged}
            />
        </div>;
    }
}

export default EditComponent