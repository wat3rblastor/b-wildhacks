import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./tasks";

type BrowseTasksProps = {
    tasks: TaskModel[]
}

function BrowseTasks({ tasks }: BrowseTasksProps) {
    return (
        <div className="w-fit min-h-full p-24">
            <h1 className="text-2xl font-extrabold pb-4">Browse Tasks</h1>
            <div className="flex flex-row flex-wrap gap-5">
                {
                    tasks.map((task) => (
                        <Task key={task.taskid} task={task} isPending={true}/>
                    ))
                }
            </div>
        </div>
    );
}

export default BrowseTasks;