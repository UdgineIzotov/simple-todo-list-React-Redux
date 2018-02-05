/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */

import React, {Component} from 'react'

import {connect} from 'react-redux'

import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import FaPlus from 'react-icons/lib/fa/plus'

import './categoryItem.css'

@connect()
class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.onActions = this.onActions.bind(this);
        console.log('options ', this.props)

        this.onEdit             = this.onEdit.bind(this);
        this.onDelete           = this.onDelete.bind(this);
        this.onAddSubCategory   = this.onAddSubCategory.bind(this);
        this.onSelect           = this.onSelect.bind(this);

    }


    onEdit(e) {
        e.stopPropagation();

        this.props.dispatch({
            type: 'OPEN_MODAL',
            modalType: 'EDIT_MODAL',
            onConfirm: this.props.onEditConfirm,
            options: {
                editId: this.props.category.id,
                name: this.props.category.name
            }
        })
    }

    onDelete(e) {
        e.stopPropagation();

        this.props.dispatch({
            type: 'OPEN_MODAL',
            modalType: 'DELETE_MODAL',
            onConfirm: this.props.onDeleteConfirm,
            options: { id: this.props.category.id }
        })
    }

    onAddSubCategory(e) {
        e.stopPropagation();

        this.props.dispatch({
            type: 'OPEN_MODAL',
            modalType: 'ADD_SUB_MODAL',
            onConfirm: this.props.onAddSubConfirm,
            options: { parentId: this.props.category.id}
        })
    }

    onSelect(e) {
        e.stopPropagation();

        this.props.onSelect(this.props.category.id);
    }

    onActions(e) {
        console.log(this.props);
        switch (e.target.closest('button').dataset.id) {
            case 'extend': {
                break;
            }
            case 'add-subcategory': {
                break;
            }
            case 'edit': {
                break;
            }
            case 'delete': {
                console.log(this.props)
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {

        return <div>
            <div className={"category-item " + (this.props.isSelected && "selected")} onClick={this.onSelect}>
                {
                    this.props.subcategories &&
                    <button className="extend-btn" data-id="extend"></button>
                }
                <span className="category-item-name">{this.props.category.name}</span>
                <button className="edit-btn" onClick={this.onEdit}><FaEdit/></button>
                <button className="add-subcategory-btn" onClick={this.onAddSubCategory}><FaPlus/></button>
                <button className="delete-btn" onClick={this.onDelete}><FaTrash/></button>
            </div>
        </div>;
    }
}

export default CategoryItem
