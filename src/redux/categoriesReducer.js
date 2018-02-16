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
                        actions.categoryName)
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
            const categories = JSON.parse( JSON.stringify(state.categories));

            const path = getTreePath(categories, actions.parentId);

            path[ path.length - 1 ].subCategories.push(
                new Category(
                    `${actions.parentId}.${path[ path.length - 1 ].subCategories.length.toString()}`,
                    actions.name
                )
            );

            console.log(path[ path.length - 1 ]);
            console.log(path[ path.length - 1 ].subCategories);


            return {
                ...state,
             categories
            };
        }
        case 'DELETE_CATEGORY': {
            console.log('CATEGORY DELETE')
            console.log(actions)
            const categories = JSON.parse( JSON.stringify(state.categories));
            

            return state;
        }
        default: return state;
    }
}

const getTreePath = (categories, id) => {

    const ids = id.split('.').map( item => parseInt(item, 10));

    let nextNode = categories[ ids.shift() ];

    let path = [].concat( nextNode );

    ids.forEach( id =>  {
        nextNode = nextNode.subCategories[id];
        path.push(nextNode);
    } )

    return path;
}

