/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */

import React, {Component} from 'react'

import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import FaPlus from 'react-icons/lib/fa/plus'

import './categoryItem.css'

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.onActions = this.onActions.bind(this);
    }

    onActions(e) {
        switch (e.target.dataset.id) {
            case 'extend': {

            }
            case 'edit': {

            }
            case 'add-subcategory': {

            }
            case 'edit': {

            }
            case 'delete': {

            }
            default: {
                this.props.onSelect(this.props.category.id)
            }
        }
    }

    render() {

        return <div>
            <div className={"category-item " + (this.props.isSelected && "selected") } onClick={this.onActions}>
                {
                    this.props.subcategories &&
                    <button className="extend-btn" data-id="extend"></button>
                }
                <span   className="category-item-name">{this.props.category.name}</span>
                <button className="edit-btn" data-id="edit"><FaEdit/></button>
                <button className="add-subcategory-btn" data-id="add-subcategory"><FaPlus/></button>
                <button className="delete-btn" data-id="delete"><FaTrash/></button>
            </div>
        </div>;
    }
}

export default CategoryItem
