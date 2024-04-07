import { Task as TaskModel } from "../interfaces/interfaces";

type TaskProps = {
    task: TaskModel
}

function Task ({ task, isPending }: TaskProps) {

	let people = (
		<div>
    		<p className="font-semibold">People who have applied:</p>
    	</div>
	);

	if (!isPending) {
		people = (
			<div>
    			<p className="font-semibold">Person doing task:</p>
    		</div>
		);
	}


	return (
		<div className="bg-slate-300 w-64 h-96 rounded-md shadow-lg border border-slate-500 p-4">
        	<div>
        		<h1 className="font-extrabold text-xl">{task?.title || 'Title'}</h1>
        	</div>
        	<div>
        		<p className="font-semibold">Address:</p>
        		<p className="">{task?.address || 'Not Given.'}</p>
        	</div>
        	<div className="inline-flex gap-2">
        		<p className="font-semibold">Duration:</p>
				<p>{task?.duration || 'N/A'}</p>
        	</div>
        	<br/>
        	<div className="inline-flex gap-2">
        		<p className="font-semibold">Availablity:</p>
				<p>{task?.available || 'Loading...'}</p>
        	</div>
        	<br/>
        	<div className="inline-flex gap-2">
        		<p className="font-semibold">Budget:</p>
				<p>{task?.budget || 'Budget not given.'}</p>
        	</div>
        	<br/>
        	<div>
        		<p className="font-semibold">Description:</p>
				<p>{task?.description || 'Description not given'}</p>
        	</div>
        	{people}


        	
        </div>
	);
}

export default Task;