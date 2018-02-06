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
            let indexToUpdate;

            state.categories.some(
                (category, index) => {
                   indexToUpdate = index;
                   return category.id === actions.editId;
                }
            )

            const categoryToUpdate = state.categories[indexToUpdate];

            return {
                ...state,
                categories: [
                    ...state.categories.slice(0, indexToUpdate),
                    new Category(categoryToUpdate.id, actions.newName),
                    ...state.categories.slice(indexToUpdate + 1),
                ]
            };
        }
        case 'ADD_SUB_CATEGORY': {
            console.log('CATEGORY ADD SUB')

            return {
                ...state,
             categories: state.categories.concat( new Category(
                 `${actions.parentId}.${state.categories.length.toString()}`,
                 actions.name
             ))
            };
        }
        case 'DELETE_CATEGORY': {
            console.log('CATEGORY DELETE')

            return state;
        }
        default: return state;
    }
}