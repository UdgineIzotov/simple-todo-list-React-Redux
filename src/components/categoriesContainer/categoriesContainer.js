/**
 * Created by Evhenii_Izotov on 2/1/2018.
*/

import React, {Component} from 'react'
import InputField from './../inputField/inputField'
import CategoryItem from './../categoryItem/categoryItem'

import './categoriesContainer.css';
import { connect } from 'react-redux'

@connect( (store) => store.categories)
class CategoriesContainer extends Component {
    constructor(props) {
        super(props);

        this.addCategory = this.addCategory.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }

    addCategory(categoryName) {
     this.props.dispatch({type: 'CATEGORY_ADD', payload: { categoryName }})
    }

    selectCategory(categoryId) {
        this.props.dispatch({type: 'CATEGORY_SELECTED', payload: {id: categoryId} })
    }

    render() {
        
        return <div className="categories-container">
            <InputField actionName="Add" action={this.addCategory}/>
            <ul className="categories-list">
                {this.props.categories.map( (item) =>
                    <li key={item.id}>
                        <CategoryItem category={item}
                                      onSelect={this.selectCategory}
                                      isSelected={item.id === this.props.curCategoryId}/>
                    </li>
                )
                }
            </ul>
        </div>;
    }   
}

export default CategoriesContainer