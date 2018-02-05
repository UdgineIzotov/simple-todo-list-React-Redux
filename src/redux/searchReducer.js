/**
 * Created by Evhenii_Izotov on 2/5/2018.
 */
export default (state = {}, actions) => {
    switch(actions.type) {
        case 'SEARCH': {
            return {...state, searchValue: actions.searchValue}
        }
        default: return state;
    }
}