import { useState } from "react";
import { createBid } from "../client/client";
import { Task as TaskModel } from "../interfaces/interfaces";
import Link from 'next/link';

type TaskProps = {
    task: TaskModel
}

function Task ({ task, isPending }: TaskProps) {
	
	function handleClick() {
		console.log("Something clicked");
	}

	return (
		<Link href={`/bid/${task.taskid}`} onClick={handleClick}>
			<div className="bg-white w-64 h-auto rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
				<h1 className="font-serif text-xl text-gray-800 mb-2">{task?.title || 'Title'}</h1>

				<div className="space-y-4">
					<div>
						<p className="font-semibold text-gray-700">Address:</p>
						<p className="text-sm text-gray-600">{task?.address || 'Not Given'}</p>
					</div>
					<div className="flex items-center gap-2">
						<p className="font-semibold text-gray-700">Duration:</p>
						<p className="text-sm text-gray-600">{task?.duration || 'N/A'}</p>
					</div>
					<div className="flex items-center gap-2">
						<p className="font-semibold text-gray-700">Availability:</p>
						<p className="text-sm text-gray-600">{task?.available || 'Loading...'}</p>
					</div>
					<div className="flex items-center gap-2">
						<p className="font-semibold text-gray-700">Budget:</p>
						<p className="text-sm text-gray-600">{task?.budget || 'Budget not given'}</p>
					</div>
					<div>
						<p className="font-semibold text-gray-700">Description:</p>
						<p className="text-sm text-gray-600">{task?.description || 'Description not given'}</p>
					</div>
				</div>
			</div>
        </Link>
	);
}

export default Task;