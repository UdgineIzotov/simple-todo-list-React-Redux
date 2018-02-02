/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import FaEdit from 'react-icons/lib/fa/edit'

import './taskItem.css'

class TaskItem extends Component {
    constructor(props) {
        super(props);

        this.onChBChange = this.onChBChange.bind(this);
    }

    onChBChange(e) {
        const task = {...this.props.task};
        task.isDone = e.target.checked;

        console.log('/**** IS DONE *****/', e.target.checked)
        this.props.updateTask(task);
    }
    
    render() {
        return <div className={`task-item ${(this.props.task.isDone && 'done')}`}>
            <input type="checkbox"
                   className="task-item-done"
                   defaultValue={this.props.task.isDone}
                   onChange={this.onChBChange}/>
            <span className="task-item-name">{this.props.task.name}</span>
            <Link className="task-item-edit"
                  to={`/edit/${this.props.task.id}`}> <FaEdit /> </Link>

        </div>;
    }   
}

export default TaskItem