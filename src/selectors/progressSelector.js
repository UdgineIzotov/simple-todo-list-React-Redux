export default (tasks) => {
    const sortedTasks = []

    tasks.forEach(task => {
    sortedTasks[task.id] =  sortedTasks[task.id] || 0;

    if (!task.isDone) {
         sortedTasks[task.categoryId]++;
        }             
    });       

    const inProgressTasks = sortedTasks.filter( task => !task);

    return sortedTasks.length / inProgressTasks.length; 
}
