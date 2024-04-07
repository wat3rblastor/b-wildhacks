import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./P_Task";

type PendingTasksProps = {
    tasks: TaskModel[]
}

function PendingTasks({ tasks }: PendingTasksProps) {
    return (
        <div className="pb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Pending Tasks</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tasks.map((task) => (
                    <Task key={task.taskid} task={task} />
                ))}
            </div>
        </div>
    );
}

export default PendingTasks;