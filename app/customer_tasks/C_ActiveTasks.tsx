import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./C_Task";
// Create props for the active tasks
type ActiveTasksProps = {
    tasks: TaskModel[]
}
const  ActiveTasks  = ({ tasks }: ActiveTasksProps) =>  {
    console.log(tasks)
    return (
        <div className="w-fit pb-8">
            <h1 className="text-2xl font-extrabold pb-4">Active Tasks</h1>
            <div className="flex flex-auto flex-row flex-wrap gap-5">
                {tasks.map((task) => (
                    <Task key={task.taskid} task={task} isPending={false}/>
                ))}
            </div>
        </div>
    );
}

export default ActiveTasks;