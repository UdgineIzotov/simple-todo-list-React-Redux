/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */

import Task from '../model/Task'
export default (state={}, actions) => {
    switch(actions.type) {
        case 'TASK_ADD': {
            return state.concat( new Task(state.length.toString(), actions.payload.taskCategory, actions.payload.name) )
        }
        case 'TASK_UPDATE': {
            const tasks =  [...state];
            console.log(actions.task);
            tasks[actions.task.id] = actions.task;

            return tasks;
        }
        default: return state;
    }
}