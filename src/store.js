/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
import {createStore, combineReducers} from 'redux'

import categoriesReducer from './redux/categoriesReducer'
import tasksReducer from './redux/tasksReducer'
import modalsReducer from './redux/modalsReducer'
import filterReducer from './redux/filterReducer'
import search from './redux/searchReducer'

const reducers = combineReducers({
    categories: categoriesReducer,
    tasks: tasksReducer,
    modal: modalsReducer,
    filter: filterReducer,
    search
});

const store = createStore(
    reducers,
    {
        categories: {
            categories: [],
            curCategoryId: null,
        },
        tasks: [],
        modal: {
            modalType: '',
            onConfirm: null,
            visibility: false,
            options: {}
        },
        filter: {
            isShowDone: false
        },
        search: { searchValue: '' }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log("store changed", store.getState());
})

export default store