/**
 * Created by Evhenii_Izotov on 2/6/2018.
 */

export const FILTER_CHANGE = 'FILTER_CHANGE';
export const SEARCH = 'SEARCH';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';
export const ADD_SUB_CATEGORY = 'ADD_SUB_CATEGORY';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const OPEN_MODAL = 'OPEN_MODAL';
export const TASK_ADD = 'TASK_ADD';
export const TASK_UPDATE = 'TASK_UPDATE';

export const filterTasks = filter => ({ type: FILTER_CHANGE, filter });

export const search = searchValue => ({ type: SEARCH , searchValue});

export const addCategory = categoryName => ({ type: CATEGORY_ADD, categoryName });

export const selectCategory = categoryId => ({type: CATEGORY_SELECTED, categoryId});

export const addSubCategory = (parentId, name) => ({type: ADD_SUB_CATEGORY, parentId, name})

export const editCategory = (editId, newName) => ({type: CATEGORY_UPDATE, editId, newName });

export const deleteCategory = categoryId => ({ type: DELETE_CATEGORY, categoryId});

export const openModal = (modalType, onConfirm, options) => ({ type: OPEN_MODAL, modalType, onConfirm, options });

export const addTask = (taskName, taskCategory) => ({ type: TASK_ADD, taskName, taskCategory });

export const updateTask = (task) => ({type: TASK_UPDATE, task});


