/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
import Category from '../model/category'

export default (state = {}, actions) => {

    switch(actions.type) {
        case 'CATEGORY_ADD': {
            return {
                ...state,
                categories: state.categories.concat(
                    new Category(
                        state.categories.length.toString(),
                        actions.payload.categoryName)
                )
            }
        }
        case 'CATEGORY_SELECTED': {

            return {...state, curCategoryId: actions.payload.id}
        }
        case 'CATEGORY_UPDATE' : {
            console.log('CATEGORY UPDATING')
            return state;
        }
        case 'ADD_SUB_CATEGORY': {
            console.log('CATEGORY ADD SUB')

            return state;
        }
        case 'DELETE_CATEGORY': {
            console.log('CATEGORY DELETE')

            return state;
        }
        default: return state;
    }
}