/**
 * Created by Evhenii_Izotov on 2/1/2018.
*/

import React, {Component} from 'react'
import InputField from './../inputField/inputField'
import CategoryItem from './../categoryItem/categoryItem'

import './categoriesContainer.css';
import { connect } from 'react-redux'

@connect(
    store => ({
        curCategoryId: store.categories.curCategoryId,
        categories: store.categories.categories
            .filter( category => category.id.indexOf('.') === -1 )
    })
)
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
        console.log('WORKINGGNGdsgfraeo')
        this.props.dispatch({type: 'ADD_SUB_CATEGORY', parentId: options.parentId, name: options.name });
    }

    EditConfirm(options) {
        this.props.dispatch({type: 'CATEGORY_UPDATE', ...options})
    }

    DeleteConfirm(options) {
        console.log(options)
        alert(`working  ${options}`);
    }

    render() {
        return <div className="categories-container">
            <InputField actionName="Add" action={this.addCategory}/>
            <ul className="categories-list">
                {this.props.categories.map( (item) =>
                    <li key={item.id}>
                        <CategoryItem category={item}
                                      onSelect={this.selectCategory}
                                      isSelected={item.id === this.props.curCategoryId}
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

export default CategoriesContainer