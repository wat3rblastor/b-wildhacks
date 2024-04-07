import Task from "./C_Task";

function PendingTasks() {
    return (
        <div className="w-fit">
            <h1>Pending Tasks</h1>
            <div className="grid grid-flow-col grid-cols-3 gap-5">
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
}

export default PendingTasks;