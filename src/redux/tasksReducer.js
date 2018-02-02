/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */

import Task from '../model/Task'
export default (state={}, actions) => {
    console.log('action', actions, state);
    switch(actions.type) {
        case 'TASK_ADD': {
            console.log('actions', actions.pa);
            return state.concat( new Task(state.length.toString(), actions.payload.taskCategory, actions.payload.name) )
        }
        case 'TASK_UPDATE': {
            const tasks =  [...state];
            tasks[actions.payload.task.id] = actions.payload.task;

            return tasks;
        }
        default: return state;
    }
}