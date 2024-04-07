import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./P_Task";

type PendingTasksProps = {
    tasks: TaskModel[]
}

function PendingTasks({ tasks }: PendingTasksProps) {
    return (
        <div className="w-fit">
            <h1>Pending Tasks</h1>
            <div className="grid grid-flow-col grid-cols-3 gap-5">
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