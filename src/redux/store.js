/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
import { createStore, combineReducers } from 'redux'

import categoriesReducer from './categoriesReducer'
import tasksRedurer from './tasksReducer'

const reducers = combineReducers({
    categories: categoriesReducer,
    tasks: tasksRedurer
});

const store = createStore(reducers, {
    categories: {
        categories: [],
        curCategoryId: null,
    },
    tasks: []
});

store.subscribe( () => {
    console.log("store changed", store.getState());
})

export default store