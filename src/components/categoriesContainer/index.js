/**
 * Created by Evhenii_Izotov on 2/1/2018.
*/

import React, {Component} from 'react'
import InputField from './../inputField'
import CategoryItem from './../categoryItem'

import './categoriesContainer.css';
import { connect } from 'react-redux'

const mapStateToProps = store => ({
    categories: store.categories.categories            
})

class CategoriesContainer extends Component {
    constructor(props) {
        super(props);

        this.addCategory = this.addCategory.bind(this);
        this.selectCategory = this.selectCategory.bind(this);

        this.AddSubConfirm = this.AddSubConfirm.bind(this);
        this.EditConfirm = this.EditConfirm.bind(this);
        this.DeleteConfirm = this.DeleteConfirm.bind(this);
    }

    addCategory(categoryName) {
     this.props.dispatch({type: 'CATEGORY_ADD', categoryName})
    }

    selectCategory(categoryId) {
        this.props.dispatch({type: 'CATEGORY_SELECTED', payload: {id: categoryId} })
    }

    AddSubConfirm(options) {
        this.props.dispatch({type: 'ADD_SUB_CATEGORY', parentId: options.parentId, name: options.name });
    }

    EditConfirm(options) {
        this.props.dispatch({type: 'CATEGORY_UPDATE', ...options})
    }

    DeleteConfirm(options) {
        console.log(options);
        this.props.dispatch({type: 'DELETE_CATEGORY', ...options})
    }

    render() {
        console.log(this.props.curCategoryId);
        return <div className="categories-container">
            <InputField actionName="Add" action={this.addCategory}/>
            <ul className="categories-list">
                {this.props.categories.map( (item) =>
                    <li key={item.id}>
                        <CategoryItem category={item}
                                      onSelect={this.selectCategory}
                                      onAddSubConfirm={this.AddSubConfirm}
                                      onEditConfirm={this.EditConfirm}
                                      onDeleteConfirm={this.DeleteConfirm}
                        />
                    </li>
                )
                }
            </ul>
        </div>;
    }   
}

export default connect(mapStateToProps)(CategoriesContainer)