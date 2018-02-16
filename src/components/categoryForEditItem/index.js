/**
 * Created by Evhenii_Izotov on 2/8/2018.
 */
import React, {Component} from 'react'

import ArrowBack from 'react-icons/lib/ti/arrow-back-outline'

import './categoryForEditingItem.css'

class CategoryForEditing extends Component {
    constructor(props) {
        super(props);
        
        this.onMoveTask = this.onMoveTask.bind(this);
    }
    
    onMoveTask() {
        
    }
    
    render() {
        console.log(this.props);
        return <div>
                <div className="category-item">
                    <span className="category-item-name">{this.props.category.name}</span>
                    <button
                        className="move-btn"
                        onClick={this.onMoveTask}
                        disabled={this.props.isDisabled}><ArrowBack/></button>
                </div>
                <div className="category-children">
                    {this.props.category.subCategories.map( category => (
                        <CategoryForEditing category={category}
                                            onMoveTask={this.props.onMoveTask}
                                            isDisabled={category.id === this.props.taskCategoryId}/>
                        )
                    )}
                </div>
        </div>;
    }   
}

export default CategoryForEditing