'use client';
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Task } from "../interfaces/interfaces";
import ActiveTasks from './C_ActiveTasks';
import PendingTasks from './C_PendingTasks';

function Customer_Tasks({ loggedIn }) {

    // create a tasks state
    const [tasks, setTasks] = useState<Task[]>([]);

    // fetch tasks with useEffect
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const data: Task[] = await response.json();
            setTasks([...data]);
        }
        fetchTasks()
    }, [])

    let customerActiveTasks = tasks.filter((task) => task.userid === 1 && task.providerid != null);
    let customerPendingTasks = tasks.filter((task) => task.userid === 1 && task.providerid == null) 

    return (
        <div>
            <NavBar loggedIn={true} isCustomer={true}/>
            <ActiveTasks tasks={customerActiveTasks} />
            <PendingTasks tasks={customerPendingTasks} />
        </div>
        );
}

export default Customer_Tasks;
