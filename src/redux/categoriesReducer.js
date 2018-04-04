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
            console.log(actions)
            const categories = JSON.parse( JSON.stringify(state.categories));

            const path = getTreePath(categories, actions.editId);

            console.log(path[path.length - 1])            

            path[path.length - 1].name = actions.newName; 
            
            console.log(path[path.length - 1])
            
            return {
                ...state,
                categories
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
            return {
                ...state,
                categories
            };
        }
        case 'DELETE_CATEGORY': {
            const categories = JSON.parse( JSON.stringify(state.categories));

            const path = getTreePath(categories, actions.deleteId);

            if (path.length === 1) {
                categories.splice( categories.indexOf( path[path.length-1] ) );

                return {
                    ...state,
                    categories
                };
            }

            path[path.length - 2].subCategories.splice(
                path[path.length - 2].subCategories.indexOf(
                    path[path.length - 1]
                )
            );           

            return {
                ...state,
                categories
            };
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

