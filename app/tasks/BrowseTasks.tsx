import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./Task";
import { useNavigate, Router } from "react-router-dom";

type BrowseTasksProps = {
    tasks: TaskModel[]
}

function BrowseTasks({ tasks }: BrowseTasksProps) {
    return (
        <div className="pb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Browse Tasks</h1>
            <div className="flex flex-wrap gap-6 justify-start items-start">
                {tasks.map((task) => (<Task key={task.taskid} task={task} />))}
            </div>
        </div>
    );
}

export default BrowseTasks;