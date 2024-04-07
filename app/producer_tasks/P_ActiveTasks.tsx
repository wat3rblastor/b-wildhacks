import Task from "./Task";

function ActiveTasks () {
    return (
        <div className="w-fit">
            <h1>Active Tasks</h1>
            <div className="grid grid-flow-col grid-cols-3 gap-5">
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
}

export default ActiveTasks;