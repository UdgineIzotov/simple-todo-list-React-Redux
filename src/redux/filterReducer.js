/**
 * Created by Evhenii_Izotov on 2/5/2018.
 */

export default (state = {}, actions) => {
    switch(actions.type) {
        case 'FILTER_CHANGE': {
            console.log('CHANGING FILTER ALALALAL')
            return {...state, isShowDone: actions.filter}
        }
        default: return state;
    }
}