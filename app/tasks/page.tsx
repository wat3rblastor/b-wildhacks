'use client';
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Task } from "../interfaces/interfaces";
import BrowseTasks from './BrowseTasks';
import Footer from '../Footer.tsx';

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
        },
        {
            taskid: 3,
            userid: 1,
            title: "Placeholder Task 2",
            address: "123 Main St",
            duration: "2 hour",
            location: "Location 2",
            description: "Description 2",
            available: true,
            budget: 100,
            providerid: null
        },
        {
            taskid: 4,
            userid: 1,
            title: "Placeholder Task 2",
            address: "123 Main St",
            duration: "2 hour",
            location: "Location 2",
            description: "Description 2",
            available: true,
            budget: 100,
            providerid: null
        },
        {
            taskid: 5,
            userid: 1,
            title: "Placeholder Task 2",
            address: "123 Main St",
            duration: "2 hour",
            location: "Location 2",
            description: "Description 2",
            available: true,
            budget: 100,
            providerid: null
        },
        {
            taskid: 6,
            userid: 1,
            title: "Placeholder Task 2",
            address: "123 Main St",
            duration: "2 hour",
            location: "Location 2",
            description: "Description 2",
            available: true,
            budget: 100,
            providerid: null
        },
        {
            taskid: 7,
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

function Tasks() {

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
            <div className="w-full">
                <NavBar loggedIn={true}/>
            </div>
            <div className="max-w-6xl mx-auto px-6 py-8">
                <BrowseTasks tasks={tasks} />
            </div>
            <Footer />
        </div>
        );
}

export default Tasks;


