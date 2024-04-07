'use client';
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Task } from "../interfaces/interfaces";

import ActiveTasks from './P_ActiveTasks';
import PendingTasks from './P_PendingTasks';


const generatePlaceholderTasks = () => {
    // TODO: REMOVE
    // Added for ease of development of UI
    return [
        {
            taskid: 1,
            userid: 1,
            title: "Placeholder Task 1",
            address: "123 Main St",
            duration: "1 hour",
            location: "Location 1",
            description: "Description 1",
            available: true,
            budget: 100,
            providerid: null
        },
        {
            taskid: 2,
            userid: 1,
            title: "Placeholder Task 2",
            address: "123 Main St",
            duration: "2 hour",
            location: "Location 2",
            description: "Description 2",
            available: true,
            budget: 100,
            providerid: null
        }
    ]

}


function Producer_Tasks ({ loggedIn }) {

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

    // create a bids state
    const [bids, setBids] = useState<any>([]);

    // fetch bids with useEffect
    useEffect(() => {
        const fetchBids = async () => {
            const response = await fetch('/api/bids');
            const data = await response.json();
            setBids([...data]);
        }
        fetchBids()
    })

    // TODO: convert to Set for performance.
    const validTasks = bids.filter((bid) => bid.userid === 2).map((bid) => bid.taskid); // should be providerid, schema is not ideal. 

    let providerActiveTasks = tasks.filter((task) => task.providerid === 2);
    let providerPendingTasks = tasks.filter((task) => task.providerid === null && validTasks.includes(task.taskid)) 

    // TODO: REMOVE - used to render placeholders for ui dev when needed..
    providerActiveTasks = providerActiveTasks.length > 0 ? providerActiveTasks : generatePlaceholderTasks();
    providerPendingTasks = providerPendingTasks.length > 0 ? providerPendingTasks : generatePlaceholderTasks();

    return (
    <main className="min-h-screen p-24 flex flex-col justify-center">
        <NavBar loggedIn={loggedIn} />
        <ActiveTasks tasks={providerActiveTasks} />
        <PendingTasks tasks={providerPendingTasks} />
    </main>)
}

export default Producer_Tasks;