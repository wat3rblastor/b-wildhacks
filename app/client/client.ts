import { Task } from "../interfaces/interfaces";

export const createTask = async (task: Task) => {
    // const exampleTask : Task = {
    //     taskid: 1,
    //     userid: 1, // Defaulut Customer
    //     title: "Test Task",
    //     description: "Test Description",
    //     address: "123 Main Street",
    //     duration: "1 hour",
    //     location: "123 Main Street",
    //     available: true,
    //     budget: 100,
    //     providerId: null
    // }
    const response = await fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(
         task
      ),
    });
}
// createTask();