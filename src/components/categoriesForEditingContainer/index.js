/**
 * Created by Evhenii_Izotov on 2/8/2018.
 */
import React, {Component} from 'react'

import CategoryForEditingItem from '../categoryForEditItem'


class CategoriesForEditingContainer extends Component {
    constructor(props) {
        super(props);

        this.moveTask = this.moveTask.bind(this);
    }

    moveTask() {

    }

    render() {

        return <div className="categories-container">
            <ul className="categories-list">
                {this.props.categories.map( (item) =>
                    <li key={item.id}>
                        <CategoryForEditingItem category={item}
                                      onMoveTask={this.moveTask}
                                      isDisabled={item.id === this.props.taskCategoryId}
                        />
                    </li>
                )
                }
            </ul>
        </div>;
    }
}

export default CategoriesForEditingContainer