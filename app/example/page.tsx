"use client";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { ListTasksResponse, Task } from "../interfaces/interfaces";


const  Page = () =>  {

    // create a tasks state
    const [tasks, setTasks] = useState<Task[]>([]);

    // fetch tasks with useEffect
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const { data }: ListTasksResponse = await response.json();
            setTasks(data);
        }
        fetchTasks()
    }, [])


    return (
        
        <main className="min-h-screen p-24 flex flex-col justify-center">
        <NavBar/>
        {tasks.map((task) => (
            <div key={task.taskid}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
        ))}
        <div className="w-fit">
            <h1>Active Tasks</h1>
            <div className="grid grid-flow-col grid-cols-3 gap-5">
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
            </div>
        </div>
        
        <div className="w-fit">
            <h1>Pending Tasks</h1>
            <div className="grid grid-rows-3 gap-5">
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
                <div className="bg-slate-300 w-64 h-96 rounded-md">
                    <h1>Card</h1>
                </div>
            </div>
        </div>
    </main>)
}

export default Page;