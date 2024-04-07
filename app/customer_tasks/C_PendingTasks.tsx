import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./C_Task";

type PendingTasksProps = {
    tasks: TaskModel[]
}

function PendingTasks({ tasks }: PendingTasksProps) {
    return (
        <div className="w-fit">
            <h1 className="text-2xl font-extrabold pb-4">Pending Tasks</h1>
            <div className="flex flex-row flex-wrap gap-5">
                {
                    tasks.map((task) => (
                        <Task key={task.taskid} task={task} />
                    ))
                }
            </div>
        </div>
    );
}

export default PendingTasks;