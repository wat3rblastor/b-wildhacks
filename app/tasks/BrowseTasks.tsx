import { Task as TaskModel } from "../interfaces/interfaces";
import Task from "./Task";
import { useNavigate, Router } from "react-router-dom";

type BrowseTasksProps = {
    tasks: TaskModel[]
}

<<<<<<< HEAD
function BrowseTasks({ tasks }: BrowseTasksProps) {
=======
function BrowseTasks({ tasks }) {
>>>>>>> d95b90c (add bid)
    return (
        <div className="w-fit min-h-full p-24">
            <h1 className="text-2xl font-extrabold pb-4">Browse Tasks</h1>
            <div className="flex flex-row flex-wrap gap-5">
                {
                    tasks.map((task) => (
<<<<<<< HEAD
                        <Task key={task.taskid} task={task} isPending={true}/>
=======
                        <Task key={task.taskid} task={task} />
>>>>>>> d95b90c (add bid)
                    ))
                }
            </div>
        </div>
    );
}

export default BrowseTasks;