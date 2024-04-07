import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// create data type for response

// interface Task {
//     taskid: number;
//     userid: number; // Assuming it references an existing user
//     title: string;
//     address: string;
//     duration: string; // Represented as a string, but you might want a specific format or even a Date type
//     location: string;
//     description: string;
//     available: boolean;
//     budget: number;
//     providerid: number; // Assuming it references an existing user, can be nullable if not always set
//   }

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

export async function GET(req, res) {
    // Check if the database instance has been initialized
    if (!db) {
        // If the database instance is not initialized, open the database connection
        db = await open({
        filename: "../collection.db", // Specify the database file path
        driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
        });
    }
    
    // Perform a database query to retrieve all items from the "items" table
    const response = await db.all("SELECT * FROM tasks");

    // const response: listTasksResponse = {
    //     // use interface to create some mock data
    //     data: [
    //         {
    //             taskid: 1,
    //             userid: 1,
    //             title: "Task 1",
    //             address: "123 Main St",
    //             duration: "1 hour",
    //             location: "Location 1",
    //             description: "Description 1",
    //             available: true,
    //             budget: 100,
    //             providerid: 1
    //         },
    //         {
    //             taskid: 2,
    //             userid: 1,
    //             title: "Task 2",
    //             address: "543 Main St",
    //             duration: "1 hour",
    //             location: "Location 2",
    //             description: "Description 2",
    //             available: true,
    //             budget: 100,
    //             providerid: 1
    //         }
    //     ]
    // }

    return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}