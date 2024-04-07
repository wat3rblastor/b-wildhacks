import NavBar from "../components/Navbar";
import Task from "./C_Task";
import ActiveTasks from './C_ActiveTasks';
import PendingTasks from './C_PendingTasks';



function Customer_Tasks ({ loggedIn }) {
    return (
    <main className="min-h-screen p-24 flex flex-col justify-center">
        <NavBar loggedIn={loggedIn} />
        <ActiveTasks />
        <PendingTasks />
    </main>)
}

export default Customer_Tasks;