/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
import Category from '../model/category'

export default (state = {}, actions) => {
    console.log('action', actions, state);

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
        default: return state;
    }
}