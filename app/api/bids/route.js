import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// interface Bidding {
//     biddingid: number;
//     taskid: number;
//     userid: number; // Assuming it references an existing user
//     price: number;
//   }

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

export async function GET(req, res) {
    // Check if the database instance has been initialized
    if (!db) {
        // If the database instance is not initialized, open the database connection
        db = await open({
        filename: "./collection.db", // Specify the database file path
        driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
        });
    }
    
    // Perform a database query to retrieve all items from the "biddings" table
    const response = await db.all("SELECT * FROM biddings");

    return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}