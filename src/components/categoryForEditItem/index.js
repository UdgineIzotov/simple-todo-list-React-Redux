/**
 * Created by Evhenii_Izotov on 2/8/2018.
 */
import React, {Component} from 'react'

import ArrowBack from 'react-icons/lib/ti/arrow-back-outline'

import './categoryForEditingItem.css'

class CategoryForEditing extends Component {
    constructor(props) {
        super(props);
        
        this.MoveTask = this.MoveTask.bind(this);
    }
    
    MoveTask() {
        this.props.onMoveTask(this.props.category.id);
    }
    
    render() {
        console.log(this.props.taskCategoryId === this.props.category.id);
        return <div>
                <div className="category-item">
                    <span className="category-item-name">{this.props.category.name}</span>
                    <button
                        className="move-btn"
                        onClick={this.MoveTask}
                        disabled={this.props.taskCategoryId === this.props.category.id}>
                            <ArrowBack/>
                        </button>
                </div>
                <div className="category-children">
                    {this.props.category.subCategories.map( category => (
                        <CategoryForEditing key={category.id}
                                            category={category}
                                            onMoveTask={this.props.onMoveTask}
                                            taskCategoryId = {this.props.taskCategoryId}/>
                        )
                    )}
                </div>
        </div>;
    }   
}

export default CategoryForEditing