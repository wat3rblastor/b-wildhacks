import { Task as TaskModel } from "../interfaces/interfaces";

type TaskProps = {
    task: TaskModel
}

function Task ({ task }: TaskProps) {
	return (
		<div className="bg-slate-300 w-64 h-96 rounded-md">
        	<div>
        		<h1>{task?.title || 'Title'}</h1>
        	</div>
        	<div>
        		<p>{task?.address || 'Address'}</p>
        	</div>
        	<div>
				<p>{task?.duration || 'Duration'}</p>
        	</div>
        	<div>
				<p>{task?.description || 'Description'}</p>
        	</div>
        	<div>
				<p>{task?.available || 'Available'}</p>
        	</div>
        	<div>
				<p>{task?.budget || 'Budget'}</p>
        	</div>
        </div>
	);
}

export default Task;