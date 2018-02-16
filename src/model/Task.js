/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
export default class Task {
    constructor(id, categoryId, name = 'task', isDone = false, description = '') {
        if (id === undefined || categoryId === undefined) {
            console.log(id, categoryId)
            throw new Error('id and categoryId must be defined for Task');
        }

        this.id = id;
        this.categoryId = categoryId;
        this.name = name;
        this.isDone = isDone;
        this.description = description;

    }
}

