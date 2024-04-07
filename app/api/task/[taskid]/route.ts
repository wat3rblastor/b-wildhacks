import { ListTasksResponse, Task } from "../../interfaces/interfaces";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Assuming Task interface is already defined elsewhere as mentioned in your comment

let db = null;

// Improved runQuery function to handle SQL queries with parameters
const runQuery = async (db, sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) { // "function" is used here to access the "this" keyword which provides the last ID and changes count
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID, changes: this.changes });
      }
    });
  });
};

export async function POST(req, res) {
  // Extract the "providerid" from the URL by splitting the URL and taking the last element
  const taskid = req.url.split("/").pop();

  // Log the extracted "providerid" to the console (for debugging purposes)
  console.log(taskid);

  if (!db) {
    db = await open({
      filename: "./collection.db",
      driver: sqlite3.Database,
    });
  }

  // Assuming req.body is parsed to a JavaScript object. Adjust according to your server setup
  const sql = `
    UPDATE tasks SET providerid = 2 WHERE taskid = ?
  `;
  const params = [taskid];

  try {
    const { id, changes } = await runQuery(db, sql, params);
    console.log(`Updated with id ${id}, changes made: ${changes}`);
    return new Response(JSON.stringify({ id, changes }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Failed to insert task:", error);
    return new Response(JSON.stringify({ error: "Failed to insert task" }), {
      headers: { "Content-Type": "application/json" },
      status: 500, // Internal Server Error
    });
  }
}
