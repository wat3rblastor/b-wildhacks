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
  if (!db) {
    db = await open({
      filename: "./collection.db",
      driver: sqlite3.Database,
    });
  }

  // Assuming req.body is parsed to a JavaScript object. Adjust according to your server setup
  const task = req.body;

  const sql = `
    INSERT INTO tasks (userid, title, address, duration, location, description, available, budget, providerid)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [task.userid, task.title, task.address, task.duration, task.location, task.description, task.available ? 1 : 0, task.budget, task.providerid];

  try {
    const { id, changes } = await runQuery(db, sql, params);
    console.log(`Inserted task with id ${id}, changes made: ${changes}`);
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
