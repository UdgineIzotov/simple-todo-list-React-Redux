/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */

import React, {Component} from 'react';

import {connect} from 'react-redux';

import FaEdit from 'react-icons/lib/fa/edit';
import FaTrash from 'react-icons/lib/fa/trash-o';
import FaPlus from 'react-icons/lib/fa/plus';

import './categoryItem.css';

import {openModal} from '../../actions';

const mapDispatchToProps = dispatch => ({
    onOpenModal: (modalType, onConfirm, options) => dispatch(openModal(modalType, onConfirm, options))
})

class CategoryItem extends Component {
    constructor(props) {
        super(props);

        this.onEdit             = this.onEdit.bind(this);
        this.onDelete           = this.onDelete.bind(this);
        this.onAddSubCategory   = this.onAddSubCategory.bind(this);
        this.onSelect           = this.onSelect.bind(this);

    }


    onEdit(e) {
        e.stopPropagation();

        this.props.onOpenModal('EDIT_MODAL', this.props.onEditConfirm, {
                editId: this.props.category.id,
                name: this.props.category.name
            }
        )
    }

    onDelete(e) {
        e.stopPropagation();
        this.props.onOpenModal('DELETE_MODAL', this.props.onDeleteConfirm, { id: this.props.category.id } );
    }

    onAddSubCategory(e) {
        e.stopPropagation();

        this.props.onOpenModal( 'ADD_SUB_MODAL', this.props.onAddSubConfirm, { parentId: this.props.category.id} );
    }

    onSelect(e) {
        e.stopPropagation();

        this.props.onSelect(this.props.category.id);
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
            <div className="category-children">            
            {this.props.category.subCategories.map(
                (item, index) =>  (
                    <ConnectedCategoryItem key={index} 
                                category={item}
                                onSelect={this.props.onSelect}
                                isSelected={item.id === this.props.curCategoryId}
                                onAddSubConfirm={this.props.onAddSubConfirm}
                                onEditConfirm={this.props.onEditConfirm}
                                onDeleteConfirm={this.props.onDeleteConfirm}
                        />
                    )
                )
            }
            </div>
        </div>;
    }
}

const ConnectedCategoryItem = connect(null, mapDispatchToProps)(CategoryItem);

export default ConnectedCategoryItem;
