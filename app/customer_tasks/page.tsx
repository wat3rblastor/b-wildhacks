
import NavBar from "../components/Navbar";
import Task from "./Task";
import ActiveTasks from './ActiveTasks';
import PendingTasks from './PendingTasks';



function Customer_Tasks ({ loggedIn }) {
    return (
    <main className="min-h-screen p-24 flex flex-col justify-center">
        <NavBar loggedIn={loggedIn} />
        <ActiveTasks />
        <PendingTasks />
    </main>)
}

export default Customer_Tasks;