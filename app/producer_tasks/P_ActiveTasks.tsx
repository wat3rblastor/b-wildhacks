import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./P_Task";
// Create props for the active tasks
type ActiveTasksProps = {
    tasks: TaskModel[]
}
const  ActiveTasks  = ({ tasks }: ActiveTasksProps) =>  {
    console.log(tasks)
    return (
        <div className="w-fit">
            <h1>Active Tasks</h1>
            <div className="grid grid-flow-col grid-cols-3 gap-5">
                {tasks.map((task) => (
                    <Task key={task.taskid} task={task} />
                ))}
            </div>
        </div>
    );
}

export default ActiveTasks;