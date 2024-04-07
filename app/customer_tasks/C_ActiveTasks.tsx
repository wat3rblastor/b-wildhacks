import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./C_Task";
// Create props for the active tasks
type ActiveTasksProps = {
    tasks: TaskModel[]
}
const  ActiveTasks  = ({ tasks }: ActiveTasksProps) =>  {
    console.log(tasks)
    return (
        <div className="pb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Active Tasks</h1>
            <div className="flex flex-wrap gap-6 justify-start items-start">
                {tasks.map((task) => (
                    <Task key={task.taskid} task={task} isPending={false}/>
                ))}
            </div>
        </div>
    );
}

export default ActiveTasks;