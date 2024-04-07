// setup_database.js
//
// Creates SQLite Database
// 
// Run `node setup_database.js` to create database
//
const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      userid INTEGER PRIMARY KEY AUTOINCREMENT,
      is_consumer BOOLEAN NOT NULL,
      firstname VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      phone VARCHAR(20),
      profilepicturepath VARCHAR(255),
      rating DECIMAL(3, 1) CHECK (rating >= 0.0 AND rating <= 5.0)
    );`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created users table.");
    }
  );
});
