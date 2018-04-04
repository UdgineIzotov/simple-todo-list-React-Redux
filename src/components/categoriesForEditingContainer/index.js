/**
 * Created by Evhenii_Izotov on 2/8/2018.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'

import CategoryForEditingItem from '../categoryForEditItem'

const mapStateToProps = (store, ownProps) => ({
   taskCategoryId: store.tasks.filter(task => task.id === ownProps.taskId)[0].categoryId
});

const mapDispatchToProps = (dispatch) => ({
    onMoveTask: (moveToId, taskId) => dispatch({type: "CHANGE_TASK_CATEGORY", payload: { moveToId, taskId }})
})
class CategoriesForEditingContainer extends Component {
    constructor(props) {
        super(props);

        this.moveTask = this.moveTask.bind(this);
    }

    moveTask(moveToId) {
        this.props.onMoveTask(moveToId, this.props.taskId);
    }

    render() {
        console.log(this.props)
        return <div className="categories-container">
            <ul className="categories-list">
                {this.props.categories.map( (item) =>
                    <li key={item.id}>
                        <CategoryForEditingItem
                                    category={item}
                                    onMoveTask={this.moveTask}
                                    taskCategoryId = {this.props.taskCategoryId}
                        />
                    </li>
                )
                }
            </ul>
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesForEditingContainer)